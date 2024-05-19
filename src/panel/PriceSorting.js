function PriceSorting({ priceSorting, setPriceSorting }) {
  return (
    <div className="price-sorting">
      <label htmlFor="sorting">Price: </label>
      <select
        id="sorting"
        value={priceSorting}
        onChange={(event) => {
          setPriceSorting(event.target.value);
        }}
      >
        <option value="asc">Lowest to highest</option>
        <option value="desc">Highest to lowest</option>
      </select>
    </div>
  );
}

export default PriceSorting;
