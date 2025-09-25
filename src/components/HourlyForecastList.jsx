import HourlyForecast from "./HourlyForecast";

const HourlyForecastList = ({ data, selectedDay }) => {
  // Check if data exists before proceeding
  if (!data || !data.hourly) {
    return (
      <div className="flex flex-1 bg-blue-800 gap-4 p-4 rounded">
        No hourly forecast data available
      </div>
    );
  }

  // Get the arrays directly with safe fallbacks
  const time = Array.isArray(data.hourly.time) ? data.hourly.time : [];
  const temperature = Array.isArray(data.hourly.temperature_2m)
    ? data.hourly.temperature_2m
    : [];
  const weatherCode = Array.isArray(data.hourly.weather_code)
    ? data.hourly.weather_code
    : Array.isArray(data.hourly.weathercode)
    ? data.hourly.weathercode
    : [];

  // Filter data for the selected day or use default behavior
  let filteredIndices = [];
  let hasValidData = false;

  if (selectedDay) {
    // Filter indices for the selected day
    filteredIndices = time.reduce((indices, timeStr, index) => {
      // Check if this timestring belongs to the selected day
      if (timeStr.startsWith(selectedDay)) {
        indices.push(index);
      }
      return indices;
    }, []);
    hasValidData = filteredIndices.length > 0;
  } else {
    // Fallback to original behavior - next 8 hours
    const now = new Date();
    const currentHourIndex = time.findIndex((timeStr) => {
      const forecastTime = new Date(timeStr);
      return forecastTime > now;
    });

    // If we couldn't find the current hour, default to the first hour
    const startIndex = currentHourIndex > 0 ? currentHourIndex : 0;

    // Get the next 8 hours (or fewer if not enough data)
    const endIndex = Math.min(startIndex + 8, time.length);

    // Create array of indices for the hours we want to display
    for (let i = startIndex; i < endIndex; i++) {
      filteredIndices.push(i);
    }

    hasValidData = filteredIndices.length > 0;
  }

  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex-1 overflow-y-auto mt-2">
        {hasValidData ? (
          <div className="grid grid-cols-4 gap-4">
            {filteredIndices.map((index) => (
              <HourlyForecast
                key={time[index]}
                hour={time[index]}
                temperature={temperature[index]}
                weatherCode={weatherCode[index]}
              />
            ))}
          </div>
        ) : (
          <p>
            No hourly forecast data available for{" "}
            {selectedDay ? new Date(selectedDay).toLocaleDateString() : "today"}
          </p>
        )}
      </div>
    </div>
  );
};

export default HourlyForecastList;
