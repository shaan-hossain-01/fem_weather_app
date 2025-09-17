//getCoordinatesForLocation function to fetch coordinates for a given location name
// using the Open-Meteo Geocoding API
//@param {string} locationName - The name of the location to fetch coordinates for
//@return {Promise<{latitude: number, longitude: number}>} - A promise that resolves to an object containing latitude and longitude
async function getCoordinatesForLocation(locationName) {
  //The URL for the open-meteo api
  const geocodingApiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    locationName
  )}&count=1&language=en&format=json`;
  try {
    const response = await fetch(geocodingApiUrl);
    //If fetching fails, returns immediately
    if (!response.ok)
      throw new Error("Failed to fetch coordinates" + response.status);

    //Transforming response object into JSON
    const data = await response.json();
    console.log(data);

    //If results are found, return the first result's latitude and longitude
    if (data.results && data.results.length > 0) {
      const { latitude, longitude, name, admin1, country } = data.results[0];
      return { latitude, longitude, name: `${name}, ${admin1 || country}` };
    }

    return null; //No results found
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw new Error(error);
  }
}

//getWeatherForCoordinates function to fetch weather data for given latitude and longitude
// using the Open-Meteo Weather API
//@param {Object} coords - An object containing latitude and longitude
//@param {number} coords.latitude - The latitude of the location
//@param {number} coords.longitude - The longitude of the location
//@return {Promise<Object>} - A promise that resolves to the weather data object
async function getWeatherForCoordinates({ latitude, longitude }) {
  const forecastApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
  try {
    const response = await fetch(forecastApiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data" + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error(error);
  }
}

export async function getWeatherData(locationName) {
  const coords = await getCoordinatesForLocation(locationName);
  if (!coords) {
    throw new Error("Location not found");
  }
  const weatherData = await getWeatherForCoordinates(coords);
  console.log(weatherData);
  return {
    ...weatherData,
    location: coords.name,
  };
}
