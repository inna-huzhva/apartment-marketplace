import { useState } from "react";
import NewApartment from "./NewApartment";

function AddNewApartment() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="add-apartment-button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add new apartment
      </button>
      {openModal && <NewApartment closeModal={() => setOpenModal(false)} />}
    </>
  );
}

export default AddNewApartment;
