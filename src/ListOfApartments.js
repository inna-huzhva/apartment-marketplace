import "./listOfApartments.scss";

function ListOfApartments() {
  const apartment = [
    {
      name: "Obolon flat",
      rooms: 3,
      price: 1000,
      description: "Comfortable flat with amazing river view",
    },
    {
      name: "Pecherska flat",
      rooms: 1,
      price: 3000,
      description: "Flat which is situated in the heart of Kyiv",
    },
    {
      name: "Kremenchuk flat",
      rooms: 3,
      price: 500,
      description: "Not the best decision, but still ok...",
    },
    {
      name: "London flat",
      rooms: 1,
      price: 5000,
      description: "",
    },
  ];

  return (
    <>
      {apartment.map((f) => {
        return (
          <div className="apartment-item">
            <div className="apartment-info">
              <div className="list-header">
                <span className="price">${f.price}</span>
                <span className="rooms">({f.rooms} 🛏)</span>
                <span className="name">{f.name}</span>
              </div>
              {f.description && (
                <div className="description">{f.description}</div>
              )}
            </div>
            <button>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default ListOfApartments;
