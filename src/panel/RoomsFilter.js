function RoomsFilter({ options, selectedFilter, setSelectedFilter }) {
  return (
    <div className="rooms-filter">
      <label htmlFor="filter">Amount of rooms: </label>
      <select
        id="filter"
        value={selectedFilter}
        onChange={(event) => {
          setSelectedFilter(event.target.value);
        }}
      >
        <option value="any">Any</option>
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RoomsFilter;
