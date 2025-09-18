import "./index.css";
import NavBar from "./components/NavBar";
import ShowWeather from "./components/ShowWeather";

function App() {
  return (
    <div className="max-w-[1216px] mx-auto">
      <NavBar />
      <h1 className="text-center my-16">How's the sky looking today?</h1>
      <ShowWeather />
    </div>
  );
}

export default App;
