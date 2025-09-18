const SearchBox = ({ onSubmit,isLoading }) => {

  return (
    <div className="flex justify-center">
      <form className="flex gap-4 max-w-xl w-full" onSubmit={onSubmit}>
        <div className="relative flex-1 flex bg-neutral-800 items-center rounded-lg px-6 py-4 gap-4">
          <img
            src="/src/assets/images/icon-search.svg"
            alt="Search"
            className="w-5 h-5"
          />
          <input
            className="w-full bg-neutral-800 text-white placeholder:text-neutral-200  placeholder:text-xl placeholder:leading-6 outline-none "
            name="location"
            type="text"
            placeholder="Search for a place..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-4 rounded-lg font-medium "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
