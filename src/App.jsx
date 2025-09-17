import "./index.css";
import { getWeatherData } from "./api/weatherService";

function App() {
  getWeatherData("New York");
  return (
    <>
      <div className="bg-neutral-900 text-neutral-0 p-4">
        <h1 className="text-orange-500 font-heading">Weather App</h1>
        <p className="text-neutral-300">Temperature details</p>
        <button className="bg-blue-500 text-neutral-0 px-4 py-2 rounded">
          Get Weather
        </button>
      </div>
    </>
  );
}

export default App;
