import apartments from "./defaultApartments.js";

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
