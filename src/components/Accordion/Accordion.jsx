import React from "react";
import { useState } from "react";

function Accordion({ data, allowOpenAll = false }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleActiveAccordion = (index) => {
    setActiveAccordion((preIndex) => (preIndex === index ? null : index));
  };

  return (
    <div className="accordion-container">
      {data.map((data, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                handleActiveAccordion(index + 1);
              }}
            >
              {data.name}
            </button>
            {activeAccordion === index + 1 && <p>{data.description}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
