import React from "react";
import { useState } from "react";

function Tabs({ tabData }) {
    const [activeTab, setsActiveTab] = useState(0);
    const handleCurrentTab = (index) => {
      setsActiveTab(index);
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
                  handleCurrentTab(index);
                }}
              >
                <span>{data.name}</span>
              </div>
            );
          })}
        </div>
        <div className="tab-decriptionconatiner">
          {tabData[activeTab] ? tabData[activeTab].description : ""}
        </div>
      </div>
    );
}

export default Tabs;
