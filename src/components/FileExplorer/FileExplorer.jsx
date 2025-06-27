import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const INITIAL_DATA = [
  {
    name: "de",
    inputType: "Folder",
    id: "644839ef-00ef-4f62-a045-00f54e57a49d",
    children: [],
  },
  {
    name: "frf",
    inputType: "Folder",
    id: "30df3af4-2b1c-420e-b4ff-552c50faca34",
    children: [
      {
        name: "jj",
        inputType: "Folder",
        id: "e6183049-d020-4d7b-8b7b-04e8fece229a",
        children: [],
      },
    ],
  },
  {
    name: "kdjd",
    inputType: "Folder",
    id: "4ef8c445-5c7f-4157-a67a-5a682869aadc",
    children: [],
  },
];

function FileExplorer() {
  const [addModal, setAddModal] = useState(false);
  const [name, setName] = useState("");
  const [inputType, setInputType] = useState("Folder");
  const [displayContent, setDisplayContent] = useState([]);
  const [folderId, setFolderId] = useState("");
  const handleAdd = (id) => {
    setAddModal(true);
    setFolderId(id);
  };

  const handleCloseModal = () => {
    setAddModal(false);
    setName("");
    setInputType("Folder");
  };

  const handleSubmit = () => {
    if (name.trim() !== "") {
      let newItem = {
        name: name.trim(),
        inputType: inputType,
        id: uuidv4(),
        children: [],
      };
      setDisplayContent((prev) => {
        if (!folderId) {
          return [...prev, newItem];
        }
        return prev.map((folder) =>
          folder.id === folderId
            ? { ...folder, children: [...folder.children, newItem] }
            : folder
        );
      });

      setInputType("Folder");
      handleCloseModal();
    }
  };
  return (
    <div className="fileExplorerContainer">
      <button onClick={() => handleAdd()} className="common">
        Add
      </button>

      {addModal && (
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
      )}
      <div>
        {displayContent.map((item) => (
          <div key={item.id}>
            {item.inputType === "Folder" ? (
              <>
                <div className="folder-container">
                  <img
                    src="public/chevron-right-solid.svg"
                    className="file-image"
                  />
                  <span className="folder-name">{item.name}</span>
                  <span onClick={() => handleAdd(item.id)} className="common">
                    +
                  </span>
                </div>
                {item.children.map((child) => (
                    <div key={child.id}>{child.name}</div>
                ))}
              </>
            ) : (
              <div>{item.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileExplorer;
