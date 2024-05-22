import { useEffect, useState } from "react";
import AddNewApartment from "./panel/AddNewApartment.js";
import ListOfApartments from "./ListOfApartments";
import RoomsFilter from "./panel/RoomsFilter.js";
import PriceSorting from "./panel/PriceSorting.js";
import { useLocalStorageApi } from "./localStorageApi.js";
import * as realApi from "./api.js";
import "./app.scss";

function App() {
  const [roomsFilter, setRoomsFilter] = useState("any");
  const [priceSorting, setPriceSorting] = useState("asc");
  const [[loadingStatus, loadingError, apartments], setLoadingResult] =
    useState(["LOADING", undefined, undefined]);
  const localStorageApi = useLocalStorageApi();

  useEffect(() => {
    setLoadingResult(["LOADING", undefined, undefined]);
    realApi
      .getApartments(priceSorting, roomsFilter)
      .then((apartments) =>
        setLoadingResult(["SUCCESS", undefined, apartments]),
      )
      .catch((err) => setLoadingResult(["ERROR", err.message, undefined]));
  }, [priceSorting, roomsFilter]);

  return (
    <div className="app">
      <div className="header">Apartments marketplace</div>
      {loadingStatus === "LOADING" && <div className="loader">Loading....</div>}
      {loadingStatus === "ERROR" && (
        <div className="loading-error">{loadingError}</div>
      )}
      {loadingStatus === "SUCCESS" && (
        <>
          <div>Available apartments: {apartments.length}</div>
          <div className="action-panel">
            <AddNewApartment addApartment={localStorageApi.addApartment} />
            <PriceSorting
              priceSorting={priceSorting}
              setPriceSorting={setPriceSorting}
            />
            <RoomsFilter
              selectedFilter={roomsFilter}
              setSelectedFilter={setRoomsFilter}
            />
          </div>
          <ListOfApartments
            apartments={apartments}
            deleteApartment={localStorageApi.deleteApartment}
          />
        </>
      )}
    </div>
  );
}

export default App;
