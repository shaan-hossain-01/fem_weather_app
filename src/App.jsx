import "./index.css";
import { getWeatherData } from "./api/weatherService";
function App() {
  getWeatherData("New York");
  return (
    <>
      <div>
        <h1>Hello Weather app</h1>
      </div>
    </>
  );
}

export default App;
