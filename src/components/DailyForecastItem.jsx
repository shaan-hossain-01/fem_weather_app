import DailyForecast from "./DailyForecast";

const DailyForecastItem = ({ data }) => {
  // Check if data exists before proceeding
  if (!data) {
    console.log("No data provided to DailyForecastItem");
    return (
      <div className="flex flex-1 bg-amber-950 gap-4">No data available</div>
    );
  }

  // Check if data.daily exists before proceeding
  if (!data.daily) {
    console.log("No daily data available in:", data);
    return (
      <div className="flex flex-1 bg-amber-950 gap-4">
        No daily forecast data available
      </div>
    );
  }

  console.log("Daily forecast data:", data.daily);

  // Get the arrays directly with safe fallbacks
  const time = Array.isArray(data.daily.time) ? data.daily.time : [];
  const maxTemperature = Array.isArray(data.daily.temperature_2m_max)
    ? data.daily.temperature_2m_max
    : [];
  const minTemperature = Array.isArray(data.daily.temperature_2m_min)
    ? data.daily.temperature_2m_min
    : [];
  const weatherCode = Array.isArray(data.daily.weather_code)
    ? data.daily.weather_code
    : Array.isArray(data.daily.weathercode)
    ? data.daily.weathercode
    : [];

  // Log the actual values to debug
  console.log("Weather codes:", weatherCode);

  // Verify all required arrays exist and have content
  const hasValidData = time.length > 0;

  return (
    <div className="flex flex-1 bg-amber-950 gap-4 overflow-x-auto p-2">
      {hasValidData ? (
        time.map((day, index) => (
          <DailyForecast
            key={day}
            day={day}
            maxTemperature={maxTemperature[index]}
            minTemperature={minTemperature[index]}
            weatherCode={weatherCode[index]}
          />
        ))
      ) : (
        <p>No forecast data available</p>
      )}
    </div>
  );
};

export default DailyForecastItem;
