import React from "react";

function AddModalContent({
  name,
  inputType,
  setName,
  setInputType,
  handleSubmit,
  handleCloseModal,
}) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="file-maincontainer">
          <div className="file-container">
            <div>
              Name:
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              Type:
              <select
                value={inputType}
                onChange={(e) => setInputType(e.target.value)}
              >
                <option>Folder</option>
                <option>File</option>
              </select>
            </div>
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
          <div
            onClick={(e) => {
              handleCloseModal();
            }}
            className="close-modal"
          >
            x
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModalContent;
