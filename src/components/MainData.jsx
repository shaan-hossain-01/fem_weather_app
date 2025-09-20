const MainData = ({ data }) => {
  return (
    <div className="flex-2 flex flex-col gap-8">
      <div className="flex-2 background flex justify-between items-center p-6">
        <h2 className="text-3xl text-gray-800">
          {data.location ? data.location.split(",")[0] : ""}
        </h2>
        <div className="flex gap-2">
          <p className="text-black text-7xl">
            {data.current ? Math.round(data.current.temperature_2m) : ""}
          </p>
          <p className="text-black text-7xl">
            {data.current_units?.temperature_2m}
          </p>
        </div>
      </div>
      <div className="flex-1 bg-yellow-300 flex gap-6">
        <div className="bg-orange-500 flex-1"></div>
        <div className="bg-orange-500 flex-1"></div>
        <div className="bg-orange-500 flex-1"></div>
        <div className="bg-orange-500 flex-1"></div>
      </div>
    </div>
  );
};

export default MainData;
