import React from "react";

function Folder({ item, handleAdd }) {
  return (
    <>
      <div className="folder-container">
        <img
          src="public/chevron-right-solid.svg"
          className="file-image"
          alt="toggle"
        />
        <span className="folder-name">{item.name}</span>
        <span onClick={() => handleAdd(item.id)} className="common">
          +
        </span>
      </div>
      <div className="nested-folder">
        {item.children.map((child) =>
          child.inputType === "Folder" ? (
            <Folder key={child.id} item={child} handleAdd={handleAdd} />
          ) : (
            <div key={child.id}>{child.name}</div>
          )
        )}
      </div>
    </>
  );
}

export default Folder;
