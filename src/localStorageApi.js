import defaultApartments from "./defaultApartments.js";
import { useLocalStorage } from "./useLocalStorage.js";

export const useLocalStorageApi = () => {
  const [apartments, setApartments] = useLocalStorage(
    "apartments",
    defaultApartments,
  );

  const getApartments = (priceSorting, roomsFilter) => {
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
  };

  const addApartment = (newApartment) => {
    const maxId =
      apartments.length === 0
        ? 0
        : Math.max(...apartments.map((a) => Number(a.id)));
    const newId = "" + (maxId + 1);
    setApartments([...apartments, { id: newId, ...newApartment }]);
  };

  const deleteApartment = (apartment) => {
    setApartments(apartments.filter((a) => a.id !== apartment.id));
  };

  return {
    getApartments,
    addApartment,
    deleteApartment,
  };
};
