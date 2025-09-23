import { getWeatherCategory } from "../utils/weatherCodeUtils";

// Import all icons to use them dynamically
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import iconFog from "../assets/images/icon-fog.webp";
import iconOvercast from "../assets/images/icon-overcast.webp";
import iconPartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import iconRain from "../assets/images/icon-rain.webp";
import iconSnow from "../assets/images/icon-snow.webp";
import iconStorm from "../assets/images/icon-storm.webp";
import iconSunny from "../assets/images/icon-sunny.webp";

/**
 * Component to display the appropriate weather icon based on the weather code
 * @param {Object} props
 * @param {number} props.weatherCode - The WMO weather code
 * @param {string} props.size - Size of the icon (small, medium, large)
 * @param {string} props.className - Additional CSS classes
 */
const WeatherIcon = ({ weatherCode, size = "medium", className = "" }) => {
  // Get weather category from the weather code
  const category = getWeatherCategory(weatherCode);

  // Size classes for different icon sizes
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  // Map weather categories to icon images
  const weatherIcons = {
    clear: iconSunny,
    "mostly-clear": iconSunny,
    "partly-cloudy": iconPartlyCloudy,
    overcast: iconOvercast,
    fog: iconFog,
    drizzle: iconDrizzle,
    rain: iconRain,
    snow: iconSnow,
    "rain-showers": iconRain,
    "snow-showers": iconSnow,
    thunderstorm: iconStorm,
    unknown: iconSunny, // Default icon
  };

  // Get the icon for the current weather category
  const icon = weatherIcons[category] || weatherIcons.unknown;

  return (
    <img
      src={icon}
      alt={`Weather: ${category}`}
      className={`${sizeClasses[size] || sizeClasses.medium} ${className}`}
    />
  );
};

export default WeatherIcon;
