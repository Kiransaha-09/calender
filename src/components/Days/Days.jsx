import React from "react";
import { getCalendarArray } from "./Days.helpers";

import "./Days.css";

function Days({ today, selectedDate, handleSelectedDate, currentDate }) {
  const calendar = getCalendarArray(currentDate);
  return (
    <div className="days-container">
      {calendar.map((week, weekIndex) => (
        <div key={weekIndex} className="week">
          {week.map((day, dayIndex) => {
            const isSelected = day !== null && selectedDate?.getDate() === day;
            const isToday = day === today;

            return (
              <div
                key={dayIndex}
                className={`day ${isSelected ? "selected" : ""} ${
                  isToday ? "today" : ""
                }`}
                onClick={() => day !== null && handleSelectedDate(day)}
              >
                {day !== null ? day : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Days;
