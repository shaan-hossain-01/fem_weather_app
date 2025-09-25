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

  // Get the current time and set up variables for filtering
  const now = new Date();
  let filteredIndices = [];
  let hasValidData = false;

  if (selectedDay) {
    // First filter times for the selected day
    const dayIndices = time.reduce((indices, timeStr, index) => {
      if (timeStr.startsWith(selectedDay)) {
        indices.push(index);
      }
      return indices;
    }, []);

    // Now find the current hour within that day
    const currentHourIndex = dayIndices.findIndex((index) => {
      const forecastTime = new Date(time[index]);
      return forecastTime > now;
    });

    // If we're looking at today or a future day
    if (currentHourIndex >= 0) {
      // Get the next 8 hours starting from the current hour
      const startPosition = currentHourIndex;
      const endPosition = Math.min(startPosition + 8, dayIndices.length);
      filteredIndices = dayIndices.slice(startPosition, endPosition);
    } else {
      // For past days, just show the first 8 hours of that day
      filteredIndices = dayIndices.slice(0, Math.min(8, dayIndices.length));
    }

    hasValidData = filteredIndices.length > 0;
  } else {
    // No day selected, just show next 8 hours from now across any day
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
            No forecast data available for the next 8 hours
            {selectedDay
              ? ` on ${new Date(selectedDay).toLocaleDateString()}`
              : ""}
          </p>
        )}
      </div>
    </div>
  );
};

export default HourlyForecastList;
