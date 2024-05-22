export function getService(db) {
  function getApartments(priceSorting, roomsFilter) {
    const filterExpression =
      roomsFilter === "any"
        ? "TRUE"
        : roomsFilter === "4+"
          ? "rooms >= 4"
          : `rooms = ${roomsFilter}`;
    const sortExpression =
      priceSorting === "asc" ? "price ASC, id" : "price DESC, id";
    return db.all(
      `SELECT id || '' AS id, name, rooms, price, description
       FROM apartments
       WHERE ${filterExpression} ORDER BY ${sortExpression}`,
    );
  }

  function addApartment({ name, rooms, price, description }) {
    return db
      .run(
        "INSERT INTO apartments (name, rooms, price, description) VALUES (?, ?, ?, ?)",
        name,
        rooms,
        price,
        description,
      )
      .then((res) => ({ id: res.lastID, name, rooms, price, description }));
  }

  function deleteApartment(apartmentId) {
    return db.run("DELETE FROM apartments WHERE id = ?", apartmentId);
  }

  return {
    getApartments,
    addApartment,
    deleteApartment,
  };
}
