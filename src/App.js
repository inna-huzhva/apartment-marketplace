import AddNewApartment from "./AddNewApartment";
import ListOfApartments from "./ListOfApartments";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <div className="header">Apartments marketplace</div>
      <div className="action-panel">
        <AddNewApartment />
      </div>
      <ListOfApartments />
    </div>
  );
}

export default App;
