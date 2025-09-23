import HourlyForecast from "./HourlyForecast";

const HourlyForecastList = ({ data }) => {
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

  // Find the current hour index
  const now = new Date();
  const currentHourIndex = time.findIndex((timeStr) => {
    const forecastTime = new Date(timeStr);
    return forecastTime > now;
  });

  // If we couldn't find the current hour, default to the first hour
  const startIndex = currentHourIndex > 0 ? currentHourIndex : 0;

  // Get the next 8 hours (or fewer if not enough data)
  const endIndex = Math.min(startIndex + 8, time.length);
  const hourlyData = time.slice(startIndex, endIndex);

  // Verify we have data to display
  const hasValidData = hourlyData.length > 0;

  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex-1 bg-blue-800 rounded p-4 overflow-y-auto">
        {hasValidData ? (
          <div className="grid grid-cols-4 gap-4">
            {hourlyData.map((hour, index) => {
              const actualIndex = index + startIndex;
              return (
                <HourlyForecast
                  key={hour}
                  hour={hour}
                  temperature={temperature[actualIndex]}
                  weatherCode={weatherCode[actualIndex]}
                />
              );
            })}
          </div>
        ) : (
          <p>No hourly forecast data available</p>
        )}
      </div>
    </div>
  );
};

export default HourlyForecastList;
