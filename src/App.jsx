import "./index.css";
import { getWeatherData } from "./api/weatherService";
function App() {
  getWeatherData("New York");
  return (
    <>
      <div>
        <h1 className="text-8xl text-blue-900">Hello Weather app</h1>
      </div>
    </>
  );
}

export default App;
