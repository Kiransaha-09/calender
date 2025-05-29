import { useState } from "react";
import "./App.css";

function App() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [today, setToday] = useState(new Date().getDate());

  let month = monthNames[currentDate.getMonth()];
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

  // Empty array to add days count
  const dayArray = [];
  const day = 1;

  //Add empty space before the days
  for (let i = 0; i < firstDay; i++) {
    dayArray.push(null);
  }

  // Add actual days count to the calender
  for (let i = day; i <= days; i++) {
    dayArray.push(i);
  }

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
    <>
      <div className="main-container">
        <div className="first">
          {month}
          <div>{year}</div>
        </div>
        <div className="navigation-container">
          <div onClick={handlePerviousMonth}>＜</div>
          <div onClick={handleNextMonth}>＞</div>
        </div>
      </div>
      <div className="week-container">
        {weekNames.map((week, key) => {
          return <div key={key}>{week}</div>;
        })}
      </div>
      <div className="days-container">
        {dayArray.map((day, index) => {
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
      <div className="selectedDate">
        {selectedDate && <div>Selected: {formate(selectedDate)}</div>}
      </div>
    </>
  );
}

export default App;
