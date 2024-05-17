import AddNewApartment from "./AddNewApartment";
import ListOfApartments from "./ListOfApartments";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="header">Apartments marketplace</div>
      <AddNewApartment />
      <ListOfApartments />
    </div>
  );
}

export default App;
