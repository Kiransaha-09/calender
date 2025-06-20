import React from "react";
import { useState } from "react";

function Tabs({ tabData }) {
  const [activeDescription, setsActiveDescription] = useState(null);
  const handleActiveTab = (index) => {
    setsActiveDescription(index);
  };
  return (
    <div className="tab-mainconatainer">
      <div className="tab-container">
        {tabData.map((data, index) => {
          return (
            <div
              className="tab-subconatainer"
              key={index}
              onClick={() => {
                handleActiveTab(index);
              }}
            >
              <span>{data.name}</span>
            </div>
          );
        })}
      </div>
      <div className="tab-decriptionconatiner">
        {tabData.map((data, index) => {
          if (activeDescription === index) {
            return <p key={index}>{data.description}</p>;
          }
        })}
      </div>
    </div>
  );
}

export default Tabs;
