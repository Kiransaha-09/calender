import React from "react";
import Folder from "./Folder";
import File from "./File";

function FolderStructure({ displayContent, handleAdd }) {
  return (
    <div>
      {displayContent?.map((item) =>
        item.inputType === "Folder" ? (
          <Folder key={item.id} item={item} handleAdd={handleAdd} />
        ) : (
          <File key={item.id} name={item.name} />
        )
      )}
    </div>
  );
}

export default FolderStructure;
