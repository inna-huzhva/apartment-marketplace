import { useState } from "react";
import NewApartment from "./NewApartment";
import "./addNewApartment.scss";

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
        <span class="plus-sign">＋ </span>
        Add apartment
      </button>
      {openModal && <NewApartment closeModal={() => setOpenModal(false)} />}
    </>
  );
}

export default AddNewApartment;
