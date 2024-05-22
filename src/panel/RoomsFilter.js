function RoomsFilter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="rooms-filter">
      <label htmlFor="filter">Number of rooms: </label>
      <select
        id="filter"
        value={selectedFilter}
        onChange={(event) => {
          setSelectedFilter(event.target.value);
        }}
      >
        <option value="any">Any</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4+">4+</option>
      </select>
    </div>
  );
}

export default RoomsFilter;
