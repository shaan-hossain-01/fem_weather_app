import { getWeatherCategory } from "../utils/weatherCodeUtils";
import WeatherIcon from "./WeatherIcon";

const HourlyForecast = ({ hour, temperature, weatherCode }) => {
  // Format the hour (assuming hour is in the format "2023-09-23T12:00")
  const formattedHour = hour ? new Date(hour).getHours() + ":00" : "N/A";

  // Get weather category for styling
  const weatherCategory = getWeatherCategory(weatherCode);

  return (
    <div
      className={`flex flex-col items-center p-3 bg-blue-700 rounded weather-${weatherCategory}`}
    >
      <div className="font-semibold">{formattedHour}</div>
      <div className="my-3">
        <WeatherIcon weatherCode={weatherCode} size="small" />
      </div>
      <div className="text-xl">
        {temperature !== undefined ? `${Math.round(temperature)}°` : "N/A"}
      </div>
    </div>
  );
};

export default HourlyForecast;
