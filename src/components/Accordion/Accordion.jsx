import React, { useEffect } from "react";
import { useState } from "react";

function Accordion({ data, isSingleOpenEnabled }) {
  const [accordionArray, setAccordionArray] = useState([]);

  useEffect(() => {
    setAccordionArray([]);
  }, [isSingleOpenEnabled]);

  const handleActiveAccordion = (index) => {
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
          <div key={index} className="accordionmain-container">
            <div
              className="accordion-name"
              onClick={() => {
                handleActiveAccordion(index + 1);
              }}
            >
              <span>{data.name}</span>
              <img
                src="public/angle-down-solid.svg"
                alt="down-arrow"
                className="down-arrow"
              />
            </div>

            {isOpen && (
              <p className="accordion-description">{data.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
