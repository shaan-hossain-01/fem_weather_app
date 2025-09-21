const MainTemp = ({ location, actualTemperature }) => {
  return (
    <div className="flex-2 background flex justify-between items-center px-6 ">
      <h2 className="text-3xl text-gray-800">{location}</h2>
      <div className="flex gap-2">
        <p className="text-black text-7xl">{Math.round(actualTemperature)}</p>
        <p className="text-black text-7xl">
          {/* {data.current_units?.temperature_2m} */}
        </p>
      </div>
    </div>
  );
};

export default MainTemp;
