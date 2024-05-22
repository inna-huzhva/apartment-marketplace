import defaultApartments from "./defaultApartments.js";

let apartments = defaultApartments;

export function getApartments(priceSorting, roomsFilter) {
  const filtered =
    roomsFilter === "any"
      ? apartments
      : apartments.filter((a) =>
          roomsFilter === "4+"
            ? a.rooms >= 4
            : a.rooms.toString() === roomsFilter,
        );
  const sorted = filtered.toSorted((a, b) =>
    priceSorting === "asc" ? a.price - b.price : b.price - a.price,
  );
  return sorted;
}

export function addApartment(newApartment) {
  const maxId =
    apartments.length === 0
      ? 0
      : Math.max(...apartments.map((a) => Number(a.id)));
  const newId = "" + (maxId + 1);
  newApartment = { id: newId, ...newApartment };
  apartments = [...apartments, newApartment];
  return newApartment;
}
