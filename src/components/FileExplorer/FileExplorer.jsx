import React from "react";
import { useState } from "react";

function FileExplorer() {
  const [addModal, setAddModal] = useState(false);
  const [name, setName] = useState("");
  const [inputtype, setInputType] = useState("folder");

  const [displayContent, setDisplayContent] = useState([]);
  const handleAdd = () => {
    setAddModal(true);
  };

  const handleCloseModal = () => {
    setAddModal(false);
  };

  const handleSubmit = () => {};
  return (
    <div>
      <button onClick={handleAdd}>Add</button>

      {addModal && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div>
              <div>
                Name:<input type="text"></input>
              </div>
              <div>
                Type:
                <select >
                  <option>Folder</option>
                  <option>File</option>
                </select>
              </div>
              <div>
                <button onClick={handleSubmit}>Submit</button>
              </div>
              <div
                onClick={(e) => {
                  handleCloseModal();
                }}
              >
                x
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileExplorer;
