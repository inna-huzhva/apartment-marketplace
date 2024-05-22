import { useEffect, useState } from "react";
import AddNewApartment from "./panel/AddNewApartment.js";
import ListOfApartments from "./ListOfApartments";
import RoomsFilter from "./panel/RoomsFilter.js";
import PriceSorting from "./panel/PriceSorting.js";
import { useLocalStorageApi } from "./localStorageApi.js";
import * as realApi from "./api.js";
import "./app.scss";
import "./slider.scss";

function App() {
  const [apiOption, setApiOption] = useState("backend");
  const switchApi = () =>
    setApiOption(apiOption === "backend" ? "localStorage" : "backend");
  const [roomsFilter, setRoomsFilter] = useState("any");
  const [priceSorting, setPriceSorting] = useState("asc");
  const [reload, setReload] = useState(true);
  const refresh = () => setReload((r) => !r);
  const [[loadingStatus, loadingError, apartments], setLoadingResult] =
    useState(["LOADING", undefined, undefined]);
  const localStorageApi = useLocalStorageApi();
  const api = apiOption === "backend" ? realApi : localStorageApi;

  useEffect(() => {
    setLoadingResult(["LOADING", undefined, undefined]);
    api
      .getApartments(priceSorting, roomsFilter)
      .then((apartments) =>
        setLoadingResult(["SUCCESS", undefined, apartments]),
      )
      .catch((err) => setLoadingResult(["ERROR", err.message, undefined]));
  }, [priceSorting, roomsFilter, reload, apiOption]);

  return (
    <div className="app">
      <div className="api-selector">
        <span className="type">API: {apiOption}</span>
        <label className="switch">
          <input type="checkbox" onChange={switchApi} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="header">Apartments marketplace</div>
      {loadingStatus === "LOADING" && <div className="loader">Loading....</div>}
      {loadingStatus === "ERROR" && (
        <div className="loading-error">{loadingError}</div>
      )}
      {loadingStatus === "SUCCESS" && (
        <>
          <div>Available apartments: {apartments.length}</div>
          <div className="action-panel">
            <AddNewApartment
              addApartment={api.addApartment}
              refreshApartments={refresh}
            />
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
            deleteApartment={api.deleteApartment}
            refreshApartments={refresh}
          />
        </>
      )}
    </div>
  );
}

export default App;
