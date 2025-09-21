const MainOthers = ({data, topic}) => {
  return (
    <div className="flex flex-col bg-neutral-800 stroke-neutral-600 rounded-xl flex-1">
      <p>{topic}</p>
      <div>{Math.round(data)}</div>
    </div>
  );
}

export default MainOthers