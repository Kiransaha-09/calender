import React from "react";

function Days({ today, selectedDate , getDayArray , handleSelectedDate}) {
  return (
    <div className="days-container">
      {getDayArray().map((day, index) => {
        return (
          <div
            key={index}
            className={`day ${
              day !== null && selectedDate === day ? "selected" : ""
            }
              ${day === today ? "today" : ""}`}
            onClick={() => handleSelectedDate(day)}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
}

export default Days;
