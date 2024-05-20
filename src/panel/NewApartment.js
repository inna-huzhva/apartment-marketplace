import { useState } from "react";
import "./newApartment.scss";

const shouldBeValidName = (name) =>
  /^\s*$/.test(name)
    ? "Name should not be empty"
    : name.length > 99
      ? "Name should be less than 99 letters long"
      : undefined;

const shouldBePositive = (n) =>
  !/^\d+$/.test(n) || Number(n) <= 0 ? "Should be 1 or more" : undefined;

function NewApartment({ closeModal, addApartment }) {
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const nameError = shouldBeValidName(name);
  const roomsError = shouldBePositive(rooms);
  const priceError = shouldBePositive(price);
  const hasErrors = nameError || roomsError || priceError;

  const publish = () => {
    addApartment({
      name,
      rooms: Number(rooms),
      price: Number(price),
      description,
    });
    closeModal();
  };

  return (
    <div className="new-apartment">
      <form>
        <div className="form-header">Create new apartment</div>
        <div className="fields">
          <div className="left">
            <div className="field">
              <label>
                Apartment name
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {name && nameError && (
                  <span className="error">{nameError}</span>
                )}
              </label>
            </div>
            <div className="field">
              <label>
                Number of rooms
                <br />
                <input
                  type="text"
                  value={rooms}
                  onChange={(e) =>
                    setRooms(e.target.value.replaceAll(/\D/g, ""))
                  }
                />
                {rooms && roomsError && (
                  <span className="error">{roomsError}</span>
                )}
              </label>
            </div>
            <div className="field">
              <label>
                Price
                <br />
                <input
                  type="text"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value.replaceAll(/\D/g, ""))
                  }
                />
                {price && priceError && (
                  <span className="error">{priceError}</span>
                )}
              </label>
            </div>
          </div>
          <div className="right">
            <div className="field">
              <label>
                Description (optional)
                <br />
                <textarea
                  maxLength={999}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="publish" disabled={hasErrors} onClick={publish}>
            Publish
          </button>
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewApartment;
