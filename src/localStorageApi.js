import defaultApartments from "./defaultApartments.js";
import { useLocalStorage } from "./useLocalStorage.js";

export const useApi = () => {
  const [apartments, setApartments] = useLocalStorage(
    "apartments",
    defaultApartments,
  );
  const getApartments = () => apartments;
  const addApartment = (newApartment) => {
    setApartments([...apartments, newApartment]);
  };
  const deleteApartment = (apartment) => {
    setApartments(apartments.filter((a) => a !== apartment));
  };
  return {
    getApartments,
    addApartment,
    deleteApartment,
  };
};
