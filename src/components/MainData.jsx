import MainOthers from "./MainOthers";
import MainTemp from "./MainTemp";

const MainData = ({ data }) => {
  const location = data.location ? data.location.split(",")[0] : "";
  const {
    temperature_2m: actualTemperature,
    apparent_temperature: feelsLikeTemperature,
    wind_speed_10m: windSpeed,
    precipitation,
    relative_humidity_2m: humidity,
    weather_code: weatherCode,
  } = data.current || {};
  return (
    <div className="flex-2 flex flex-col gap-8">
      <MainTemp
        location={location}
        actualTemperature={actualTemperature}
        weatherCode={weatherCode}
      />
      <div className="flex-1 flex gap-6">
        <MainOthers data={feelsLikeTemperature} topic={"Feels Like"} />
        <MainOthers data={precipitation} topic={"Precipitation"} />
        <MainOthers data={windSpeed} topic={"Wind Speed"} />
        <MainOthers data={humidity} topic={"Humidity"} />
      </div>
    </div>
  );
};

export default MainData;
