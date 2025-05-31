import { useState } from "react";
import "./App.css";

import MonthNavigation from "./components/monthNavigation";
import Weekdays from "./components/Weekdays";
import Days from "./components/Days";

function calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [today, setToday] = useState(new Date().getDate());

  let month = currentDate.toLocaleString("default", { month: "short" });
  let year = currentDate.getFullYear();

  // Handle navigation to previous month
  const handlePerviousMonth = () => {
    setCurrentDate((perviousDate) => {
      const perviousMonthDate = new Date(perviousDate);
      perviousMonthDate.setMonth(perviousMonthDate.getMonth() - 1);

      const now = new Date();
      const currentMonth = perviousMonthDate.getMonth() === now.getMonth();
      setToday(currentMonth ? now.getDate() : null);
      setSelectedDate(null);
      return perviousMonthDate;
    });
  };

  // Handle navigation to next month
  const handleNextMonth = () => {
    setCurrentDate((nextmonth) => {
      const nextMonthDate = new Date(nextmonth);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

      const now = new Date();
      const currentMonth = nextMonthDate.getMonth() === now.getMonth();
      setToday(currentMonth ? now.getDate() : null);
      setSelectedDate(null);
      return nextMonthDate;
    });
  };

  // Calculate the start day of a month
  const firstDay = new Date(year, currentDate.getMonth(), 1).getDay();

  // Use above function to calculate current month total days count
  const days = totalDaysInMonth(currentDate.getMonth(), year);

  // Calculate total number of day's in a month
  function totalDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

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

  return (
    <div className="main-layout">
      <div className="main-container">
        <div className="first">
          {month}
          <div>{year}</div>
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
      <div className="selectedDate">
        {selectedDate && <div>Selected: {formate(selectedDate)}</div>}
      </div>
    </div>
  );
}

export default calender;
