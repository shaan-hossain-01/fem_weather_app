const ShowWeather = () => {
  return (
    <div className="flex justify-center">
      <form className="flex gap-4 max-w-xl w-full">
        <input className="flex-1" type="text" placeholder="Enter city name" />
        <button className="bg-blue-500 text-white px-6 py-4 rounded-lg font-medium " type="submit">Get Weather</button>
      </form>
    </div>
  );
}

export default ShowWeather