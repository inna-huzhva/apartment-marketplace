import defaultApartments from "./defaultApartments.js";
import { useLocalStorage } from "./useLocalStorage.js";

export const useApi = () => {
  const [apartments, setApartments] = useLocalStorage(
    "apartments",
    defaultApartments,
  );
  const getApartments = () => apartments;
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
