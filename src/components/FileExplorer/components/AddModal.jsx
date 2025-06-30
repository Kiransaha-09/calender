import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddModalContent from "./AddModalContent";

function AddModal({ setDisplayContent, folderId, addModal, setAddModal }) {
  const [name, setName] = useState("");
  const [inputType, setInputType] = useState("Folder");

  const handleCloseModal = () => {
    setAddModal(false);
    setName("");
    setInputType("Folder");
  };

  const handleNestedFolder = (item, folderId, newItem) => {
    return item.map((data) => {
      if (data.id === folderId) {
        return { ...data, children: [...data.children, newItem] };
      }
      if (data.children.length > 0) {
        return {
          ...data,
          children: handleNestedFolder(data.children, folderId, newItem),
        };
      }
      return data;
    });
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
        return handleNestedFolder(prev, folderId, newItem);
      });

      setInputType("Folder");
      handleCloseModal();
    }
  };
  return (
    <>
      {addModal && (
        <AddModalContent
          name={name}
          inputType={inputType}
          setName={setName}
          setInputType={setInputType}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default AddModal;
