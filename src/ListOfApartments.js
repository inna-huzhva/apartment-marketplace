import { useState } from "react";
import "./listOfApartments.scss";

function ApartmentItem({ apartment: a, deleteApartment, refreshApartments }) {
  const [[requestStatus, requestError], setRequestResult] = useState([
    "NOT-SEND",
    undefined,
  ]);

  const deleteItem = () => {
    setRequestResult(["SENT", undefined]);
    deleteApartment(a)
      .then(() => {
        refreshApartments();
      })
      .catch((err) => setRequestResult(["ERROR", err.message]));
  };

  return (
    <div className="apartment-item">
      <div className="apartment-info">
        <div className="list-header">
          <span className="price">${a.price}</span>
          <span className="rooms">({a.rooms} 🛏)</span>
          <span className="name">{a.name}</span>
        </div>
        {a.description && <div className="description">{a.description}</div>}
      </div>
      <div className="actions">
        {requestStatus === "ERROR" && (
          <div className="loading-error">{requestError}</div>
        )}
        {requestStatus === "SENT" && (
          <div className="loader">Sending request...</div>
        )}
        {requestStatus !== "SENT" && (
          <button onClick={deleteItem}>
            <img src="./delete-icon.svg" alt="delete" width={19} height={19} />
            <span>Delete</span>
          </button>
        )}
      </div>
    </div>
  );
}

function ListOfApartments({ apartments, deleteApartment, refreshApartments }) {
  return apartments.map((a) => (
    <ApartmentItem
      apartment={a}
      deleteApartment={deleteApartment}
      refreshApartments={refreshApartments}
      key={a.id}
    />
  ));
}

export default ListOfApartments;
