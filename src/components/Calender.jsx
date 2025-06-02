import React from "react";
import { useState } from "react";
import MonthNavigation from "./monthNavigation";
import Weekdays from "./Weekdays";
import Days from "./Days/Days";
import { getFullYear } from "../helpers/date.helpers";
import { addMonth, getTodayDate } from "../helpers/date.helpers";
import { MONTH_NAMES } from "../constants/date.constants";

function Calender({ setSelectedDate, selectedDate }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [today, setToday] = useState(new Date().getDate());
  const [showPopup, setShowPopup] = useState(false);

  let month = currentDate.toLocaleString("default", { month: "short" });
  let year = getFullYear(currentDate);

  // Handle navigation to previous month
  const handlePerviousMonth = () => {
    setCurrentDate((previousMonth) => {
      const previousMonthDate = addMonth(previousMonth, -1);

      setToday(getTodayDate(previousMonthDate));
      setSelectedDate(null);

      return previousMonthDate;
    });
  };

  // Handle navigation to next month
  const handleNextMonth = () => {
    setCurrentDate((nextmonth) => {
      const nextMonthDate = addMonth(nextmonth, 1);

      setToday(getTodayDate(nextMonthDate));
      setSelectedDate(null);
      return nextMonthDate;
    });
  };

  // To get selected date
  const handleSelectedDate = (day) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
  };
  // To show month and year from calender selection
  const handleCalenderOpen = () => {
    setShowPopup(true);
  };

  const handleMonth = (month) => {
    const updatedDate = new Date(currentDate);
    updatedDate.setMonth(MONTH_NAMES.indexOf(month));
    setCurrentDate(updatedDate);

    setToday(getTodayDate(updatedDate));
    setShowPopup(false);
    setSelectedDate(null);
  };
  return (
    <div className="layout">
      <div className="main-layout">
        <div className="main-container">
          <div className="first">
            {month}
            <div>{year} </div>
            <div className="calender-icon" onClick={handleCalenderOpen}>
              🗓️
            </div>
            {showPopup && (
              <div className="popup-overlay">
                <div className="popup-content">
                  {MONTH_NAMES.map((month, index) => {
                    return (
                      <div key={index} onClick={() => handleMonth(month)}>
                        {month}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div>
            <MonthNavigation
              handleNextMonth={handleNextMonth}
              handlePerviousMonth={handlePerviousMonth}
            />
          </div>
        </div>
        <Weekdays />
        <Days
          today={today}
          handleSelectedDate={handleSelectedDate}
          selectedDate={selectedDate}
          onSelect={setSelectedDate}
          currentDate={currentDate}
        />
      </div>
    </div>
  );
}

export default Calender;
