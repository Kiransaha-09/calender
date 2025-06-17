import React from "react";
import { useState } from "react";

function Accordion({ data, isSingleOpenEnabled }) {
  const [accordionArray, setAccordionArray] = useState([]);

  const handleActiveAccordion = (index) => {
    console.log("first", index);
    setAccordionArray((arr) => {
      if (arr.includes(index)) {
        return arr.filter((item) => item !== index);
      } else {
        if (isSingleOpenEnabled) {
          return [index];
        } else {
          return [...arr, index];
        }
      }
    });
  };
  return (
    <div className="accordion-container">
      {data.map((data, index) => {
        const isOpen = accordionArray.includes(index + 1);
        return (
          <div key={index}>
            <button
              onClick={() => {
                handleActiveAccordion(index + 1);
              }}
            >
              {data.name}
            </button>
            {isOpen && <p>{data.description}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
