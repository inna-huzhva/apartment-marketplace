import { useState } from "react";
import AddNewApartment from "./panel/AddNewApartment.js";
import ListOfApartments from "./ListOfApartments";
import RoomsFilter from "./panel/RoomsFilter.js";
import PriceSorting from "./panel/PriceSorting.js";
import { apartments } from "./apartments.js";
import "./app.scss";

function App() {
  const [roomsFilter, setRoomsFilter] = useState("any");
  const [priceSorting, setPriceSorting] = useState("asc");

  const filtered =
    roomsFilter === "any"
      ? apartments
      : apartments.filter((a) => a.rooms.toString() === roomsFilter);
  const sorted = filtered.toSorted((a, b) =>
    priceSorting === "asc" ? a.price - b.price : b.price - a.price,
  );

  const roomsFilterOptions = apartments
    .map((a) => a.rooms)
    .sort((a, b) => a - b)
    .filter((x, i, a) => a.indexOf(x) === i);

  return (
    <div className="app">
      <div className="header">Apartments marketplace</div>
      <div className="action-panel">
        <AddNewApartment />
        <PriceSorting
          priceSorting={priceSorting}
          setPriceSorting={setPriceSorting}
        />
        <RoomsFilter
          options={roomsFilterOptions}
          selectedFilter={roomsFilter}
          setSelectedFilter={setRoomsFilter}
        />
      </div>
      <ListOfApartments apartments={sorted} />
    </div>
  );
}

export default App;
