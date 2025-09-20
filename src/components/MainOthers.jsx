const MainOthers = ({data}) => {
  return (
    <div className="flex flex-col bg-neutral-800 stroke-neutral-600 rounded-xl flex-1">
      <p>Feels Like</p>
      <div>{Math.round(feelsLikeTemperature)}</div>
    </div>
  );
}

export default MainOthers