import defaultApartments from "./defaultApartments.js";
import { useLocalStorage } from "./useLocalStorage.js";

export const useLocalStorageApi = () => {
  const [apartments, setApartments] = useLocalStorage(
    "apartments",
    defaultApartments,
  );

  const getApartments = (priceSorting, roomsFilter) => {
    return new Promise((resolve) => {
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
      resolve(sorted);
    });
  };

  const addApartment = (newApartment) => {
    return new Promise((resolve) => {
      const maxId =
        apartments.length === 0
          ? 0
          : Math.max(...apartments.map((a) => Number(a.id)));
      const newId = "" + (maxId + 1);
      newApartment = { id: newId, ...newApartment };
      setApartments([...apartments, newApartment]);
      resolve(newApartment);
    });
  };

  const deleteApartment = (apartment) => {
    return new Promise((resolve) => {
      setApartments(apartments.filter((a) => a.id !== apartment.id));
      resolve();
    });
  };

  return {
    getApartments,
    addApartment,
    deleteApartment,
  };
};
