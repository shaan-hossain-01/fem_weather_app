/**
 * Map weather codes to descriptions and icons
 * Based on the WMO Weather interpretation codes (WW)
 * https://open-meteo.com/en/docs
 */

// Map of weather codes to descriptions
export const weatherCodeToDescription = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

// Helper function to get description from code
export const getWeatherDescription = (code) => {
  if (code === undefined || code === null) return "Unknown";
  return weatherCodeToDescription[code] || "Unknown weather";
};

// Helper function to get a simple category for the weather code
export const getWeatherCategory = (code) => {
  if (code === undefined || code === null) return "unknown";

  if (code === 0) return "clear";
  if (code === 1) return "mostly-clear";
  if (code === 2) return "partly-cloudy";
  if (code === 3) return "overcast";
  if (code >= 45 && code <= 48) return "fog";
  if (code >= 51 && code <= 57) return "drizzle";
  if (code >= 61 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 82) return "rain-showers";
  if (code >= 85 && code <= 86) return "snow-showers";
  if (code >= 95) return "thunderstorm";

  return "unknown";
};
