import { useState } from "react";
import NewApartment from "./NewApartment";

function AddNewApartment({ addApartment }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="add-apartment-button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <span className="plus-sign">＋ </span>
        Add apartment
      </button>
      {openModal && (
        <NewApartment
          closeModal={() => setOpenModal(false)}
          addApartment={addApartment}
        />
      )}
    </>
  );
}

export default AddNewApartment;
