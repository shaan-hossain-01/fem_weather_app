const WeatherData = ({data}) => {
  return (
    <div className="grid grid-cols-3 gap-4 min-h-96 mt-12 h-[693px]">
      <div className="bg-red-600 h-full w-full col-span-2 flex flex-col gap-8">
        {/* Weather Information will go here */}
        <div className="flex-2 flex flex-col gap-8">
          <div className="flex-2 bg-yellow-300">
            <h2 className="text-3xl">{data.results[0].admin1}</h2>
          </div>
          <div className="flex-1 bg-yellow-300 flex gap-6">
            <div className="bg-orange-500 flex-1"></div>
            <div className="bg-orange-500 flex-1"></div>
            <div className="bg-orange-500 flex-1"></div>
            <div className="bg-orange-500 flex-1"></div>
          </div>
        </div>
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
