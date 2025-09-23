import { getWeatherDescription } from "../utils/weatherCodeUtils";
import WeatherIcon from "./WeatherIcon";

const MainTemp = ({ location, actualTemperature, weatherCode }) => {
  const weatherDescription = getWeatherDescription(weatherCode);

  return (
    <div className="flex-2 background flex justify-between items-center px-6 py-4 rounded-lg">
      <div>
        <h2 className="text-3xl text-gray-800 mb-2">{location}</h2>
        <div className="flex items-center gap-2">
          <WeatherIcon weatherCode={weatherCode} size="small" />
          <span className="text-sm text-gray-600">{weatherDescription}</span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <WeatherIcon weatherCode={weatherCode} size="large" className="mr-2" />
        <p className="text-black text-7xl">{Math.round(actualTemperature)}°</p>
      </div>
    </div>
  );
};

export default MainTemp;
