import "./index.css";
import NavBar from "./components/NavBar";
import ShowWeather from "./components/ShowWeather";
import { UnitProvider } from "./context/UnitContext";

function App() {
  return (
    <UnitProvider>
      <div className="max-w-[1216px] mx-auto">
        <NavBar />
        <h1 className="text-center my-16">How's the sky looking today?</h1>
        <ShowWeather />
      </div>
    </UnitProvider>
  );
}

export default App;
