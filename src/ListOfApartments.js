import "./listOfApartments.scss";

function ListOfApartments() {
  const apartment = [
    {
      name: "Alex Apartments near Independence Square",
      rooms: 1,
      price: 1500,
      description:
        "Located right in the centre of Kyiv, a 5-minute walk to Maidan Nezalezhnosti Square, Alex Apartments near Independence Square offer self-catering accommodation with free Wi-Fi.",
    },
    {
      name: "Inn Home Apartments - Ocean Plaza area",
      rooms: 1,
      price: 700,
      description:
        "At the apartment complex, every unit includes a wardrobe, a flat-screen TV, a private bathroom, bed linen and towels. Free WiFi is available to all guests, while some rooms are equipped with a balcony. The units will provide guests with a stovetop.",
    },
    {
      name: "Central Apartments Maidan Area",
      rooms: 2,
      price: 2000,
      description:
        "Located within 200 metres of Maidan Nezalezhnosti Metro Station and 700 metres of St. Michael's Golden-Domed Monastery, Central Apartments Maidan Area features rooms with air conditioning and a private bathroom in Kyiv. The property features city and inner courtyard views, and is 700 metres from Saint Sophia Cathedral. ",
    },
    {
      name: "Kyiv Loft Style Studois",
      rooms: 1,
      price: 1000,
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
            <div className="actions">
              <button>
                <img
                  src="./delete-icon.svg"
                  alt="delete"
                  width={15}
                  height={15}
                />
                <span>Delete</span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ListOfApartments;
