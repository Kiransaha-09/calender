import { useState } from "react";
import "./App.css";

import MonthNavigation from "./components/monthNavigation";
import Weekdays from "./components/Weekdays";
import Days from "./components/Days";

function calender() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [today, setToday] = useState(new Date().getDate());
  const [showPopup, setShowPopup] = useState(false);

  let month = currentDate.toLocaleString("default", { month: "short" });
  let year = currentDate.getFullYear();

  // Get pervious month
  const getPerviousMonth = (currentDate) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 0);
  };

  // Handle navigation to previous month
  const handlePerviousMonth = () => {
    setCurrentDate((previousMonth) => {
      const previousMonthDate = getPerviousMonth(previousMonth);

      const now = new Date();
      const currentMonth =
        previousMonthDate.getMonth() === now.getMonth() &&
        previousMonthDate.getFullYear() === now.getFullYear();
      setToday(currentMonth ? now.getDate() : null);
      setSelectedDate(null);

      return previousMonthDate;
    });
  };

  // Get next month
  const getNextMonth = (currentDate) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    return new Date(year, month, 1);
  };

  // Handle navigation to next month
  const handleNextMonth = () => {
    setCurrentDate((nextmonth) => {
      const nextMonthDate = getNextMonth(nextmonth);

      const now = new Date();
      const currentMonth =
        nextMonthDate.getMonth() === now.getMonth() &&
        nextMonthDate.getFullYear() === now.getFullYear();
      setToday(currentMonth ? now.getDate() : null);
      setSelectedDate(null);
      return nextMonthDate;
    });
  };

  // Calculate the start day of a month
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  // Use above function to calculate current month total days count
  const days = totalDaysInMonth(currentDate.getMonth(), year);

  // Calculate total number of day's in a month
  function totalDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  // const totalDatesRow = Array(7).fill(Array(7).fill(null));
  const getDayArray = () => {
    // Empty array to add days count
    const dayArray = [];
    //Add empty space before the days
    for (let i = 0; i < firstDay; i++) {
      dayArray.push(null);
    }

    // Add actual days count to the calender
    for (let i = 1; i <= days; i++) {
      dayArray.push(i);
    }
    return dayArray;
  };

  // To get selected date
  const handleSelectedDate = (day) => {
    setSelectedDate(day);
  };

  // To show selcted date in proper formate
  const formate = (day) => {
    const formatedDate = new Date(year, currentDate.getMonth(), day);
    const selectDate = formatedDate.getDate();
    const selectMonth = formatedDate.getMonth() + 1;
    const selectyear = formatedDate.getFullYear();
    return `${selectDate}/${selectMonth}/${selectyear}`;
  };

  // To show month and year from calender selection
  const handleCalenderOpen = () => {
    setShowPopup(true);
  };

  const handleMonth = (month) => {
    // debugger;
    const updatedDate = new Date(currentDate);
    updatedDate.setMonth(monthNames.indexOf(month));
    setCurrentDate(updatedDate);

    const now = new Date();
    const currentDay =
      updatedDate.getMonth() === now.getMonth() &&
      updatedDate.getFullYear() === now.getFullYear();
    setToday(currentDay ? now.getDate() : null);
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
                  {monthNames.map((month, index) => {
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
          getDayArray={getDayArray}
          today={today}
          handleSelectedDate={handleSelectedDate}
          selectedDate={selectedDate}
          onSelect={setSelectedDate}
        />
      </div>
      <div className="selectedDate">
        {selectedDate && <div>Selected: {formate(selectedDate)}</div>}
      </div>
    </div>
  );
}

export default calender;
