import MainTemp from "./MainTemp";

const MainData = ({ data }) => {
  const location = data.location ? data.location.split(",")[0] : "";
  const {
    temperature_2m: actualTemperature,
    apparent_temperature: feelsLikeTemperature,
    wind_speed_10m: windSpeed,
    precipitation,
    relative_humidity_2m: humidity,
  } = data.current || {};
  return (
    <div className="flex-2 flex flex-col gap-8">
      <MainTemp location={location} actualTemperature={actualTemperature} />
      <div className="flex-1 flex gap-6">
        
        <div className="flex flex-col bg-neutral-800 stroke-neutral-600 rounded-xl flex-1">
          <p>Wind Speed</p>
          <div>{Math.round(windSpeed)}</div>
        </div>
        <div className="flex flex-col bg-neutral-800 stroke-neutral-600 rounded-xl flex-1">
          <p>Precipitation</p>
          <div>{Math.round(precipitation)}</div>
        </div>
        <div className="flex flex-col bg-neutral-800 stroke-neutral-600 rounded-xl flex-1">
          <p>Humidity</p>
          <div>{Math.round(humidity)}</div>
        </div>
      </div>
    </div>
  );
};

export default MainData;
