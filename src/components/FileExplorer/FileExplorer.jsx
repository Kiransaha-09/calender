import React from "react";
import { useState } from "react";

import FolderStructure from "./components/FolderStructure";
import AddModal from "./components/AddModal";

//   {
//     name: "de",
//     inputType: "Folder",
//     id: "644839ef-00ef-4f62-a045-00f54e57a49d",
//     children: [],
//   },
//   {
//     name: "frf",
//     inputType: "Folder",
//     id: "30df3af4-2b1c-420e-b4ff-552c50faca34",
//     children: [
//       {
//         name: "jj",
//         inputType: "Folder",
//         id: "e6183049-d020-4d7b-8b7b-04e8fece229a",
//         children: [],
//       },
//     ],
//   },
//   {
//     name: "kdjd",
//     inputType: "Folder",
//     id: "4ef8c445-5c7f-4157-a67a-5a682869aadc",
//     children: [],
//   },
// ];

function FileExplorer() {
  const [displayContent, setDisplayContent] = useState([]);
  const [folderId, setFolderId] = useState("");
  const [addModal, setAddModal] = useState(false);

  const handleAdd = (id) => {
    setAddModal(true);
    setFolderId(id);
  };
  return (
    <div className="fileExplorerContainer">
      <button onClick={() => handleAdd()} className="common">
        Add
      </button>
      <AddModal
        setDisplayContent={setDisplayContent}
        folderId={folderId}
        addModal={addModal}
        setAddModal={setAddModal}
      />
      <div>
        <FolderStructure
          displayContent={displayContent}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
}

export default FileExplorer;
