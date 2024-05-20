import "./listOfApartments.scss";

function ListOfApartments({ apartments, deleteApartment }) {
  return apartments.map((a) => {
    return (
      <div className="apartment-item" key={a.name}>
        <div className="apartment-info">
          <div className="list-header">
            <span className="price">${a.price}</span>
            <span className="rooms">({a.rooms} 🛏)</span>
            <span className="name">{a.name}</span>
          </div>
          {a.description && <div className="description">{a.description}</div>}
        </div>
        <div className="actions">
          <button onClick={() => deleteApartment(a)}>
            <img src="./delete-icon.svg" alt="delete" width={19} height={19} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    );
  });
}

export default ListOfApartments;
