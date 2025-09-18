import SearchBox from "./SearchBox";
import WeatherData from "./WeatherData";
import { getWeatherData } from "../api/weatherService";
import { useEffect, useState } from "react";

const ShowWeather = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    setIsLoading(true);
    try {
      const fetchedData = await getWeatherData(location);
      console.log(fetchedData);
      setWeatherData(fetchedData);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;
    fetchWeather(searchQuery);
  }, [searchQuery]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(e.target.elements.location.value);
  }

  return (
    <>
      <SearchBox onSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && weatherData && <WeatherData data={weatherData} />}
    </>
  );
};

export default ShowWeather;
