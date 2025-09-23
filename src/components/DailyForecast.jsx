import {
  getWeatherDescription,
  getWeatherCategory,
} from "../utils/weatherCodeUtils";
import WeatherIcon from "./WeatherIcon";

const DailyForecast = ({
  day,
  maxTemperature,
  minTemperature,
  weatherCode,
}) => {
  // Check if day is valid before creating a Date object
  let dayName = "Unknown";
  try {
    if (day) {
      dayName = new Date(day).toLocaleDateString("en-US", {
        weekday: "short",
      });
    }
  } catch (error) {
    console.error("Error formatting date:", error);
  }

  // Get weather description from code
  const weatherDescription = getWeatherDescription(weatherCode);
  const weatherCategory = getWeatherCategory(weatherCode);

  return (
    <div
      className={`p-3 bg-amber-900 rounded flex flex-col items-center weather-${weatherCategory}`}
    >
      <h4 className="font-bold mb-1">{dayName}</h4>
      <div className="text-xs mb-2">{weatherDescription}</div>
      <div className="weather-icon mb-2">
        <WeatherIcon weatherCode={weatherCode} size="medium" />
      </div>
      <div className="flex justify-between w-full text-sm">
        <div className="font-semibold">
          {maxTemperature !== undefined
            ? `${Math.round(maxTemperature)}°`
            : "N/A"}
        </div>
        <div className="text-white/70">
          {minTemperature !== undefined
            ? `${Math.round(minTemperature)}°`
            : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
