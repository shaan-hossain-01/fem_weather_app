import { getWeatherCategory } from "../utils/weatherCodeUtils";
import WeatherIcon from "./WeatherIcon";

const HourlyForecast = ({ hour, temperature, weatherCode }) => {
  // Format the hour (assuming hour is in the format "2023-09-23T12:00")
  const formatHour = (timeString) => {
    if (!timeString) return "N/A";

    const date = new Date(timeString);
    const hours = date.getHours();

    // Convert to 12-hour format with AM/PM
    const hour12 = hours % 12 || 12;
    const amPm = hours >= 12 ? "PM" : "AM";

    return `${hour12}${amPm}`;
  };

  const formattedHour = formatHour(hour);

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
