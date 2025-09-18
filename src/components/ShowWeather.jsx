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
      setWeatherData(fetchedData);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;
    fetchWeather(searchQuery);
  }, [searchQuery]);

  function handleSubmit(e){
    e.preventDefault();
    setSearchQuery(e.target.elements.location.value);
  }

  return (
    <>
      <SearchBox />
      <WeatherData data={data} />
    </>
  );
};

export default ShowWeather;
