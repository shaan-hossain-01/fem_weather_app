import MainData from "./MainData";

const WeatherData = ({ data }) => {
  if (!data) return <p>No data available</p>;
  // These give better output in the console
  console.log("Weather data:", data); // Labeled object
  console.log("%c Weather Data", "color: green; font-weight: bold", data); // Styled console
  console.table(data); // Table format (good for arrays)
  return (
    <div className="grid grid-cols-3 gap-4 min-h-96 mt-12 h-[693px]">
      <div className="h-full w-full col-span-2 flex flex-col gap-8">
        {/* Weather Information will go here */}
          <MainData data={data} />
        <div className="flex flex-1 flex-col gap-4">
          <h3>Daily forecast</h3>
          <div className="flex flex-1 bg-amber-950 gap-4">
            <div className="flex-1 bg-green-900"></div>
            <div className="flex-1 bg-green-900"></div>
            <div className="flex-1 bg-green-900"></div>
            <div className="flex-1 bg-green-900"></div>
            <div className="flex-1 bg-green-900"></div>
            <div className="flex-1 bg-green-900"></div>
            <div className="flex-1 bg-green-900"></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 h-full w-full"></div>
    </div>
  );
};

export default WeatherData;
