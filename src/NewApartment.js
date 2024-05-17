import "./newApartment.scss";

function NewApartment({ closeModal }) {
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
                <input type="text" maxLength={99} />
              </label>
            </div>
            <div className="field">
              <label>
                Number of rooms
                <br />
                <input type="number" min={1} />
              </label>
            </div>
            <div className="field">
              <label>
                Price
                <br />
                <input type="number" min={1} />
              </label>
            </div>
          </div>
          <div className="right">
            <div className="field">
              <label>
                Description (optional)
                <br />
                <textarea maxLength={999}></textarea>
              </label>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="publish">Publish</button>
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewApartment;
