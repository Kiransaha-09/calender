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
  let month = monthNames[currentDate.getMonth()];
  let year = currentDate.getFullYear();

  function totalDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  const days = totalDaysInMonth(currentDate.getMonth() + 1, year);
  console.log("first", days);

  const handlePerviousMonth = () => {
    setCurrentDate((perviousDate) => {
      const perviousMonthDate = new Date(perviousDate);
      perviousMonthDate.setMonth(perviousMonthDate.getMonth() - 1);
      return perviousMonthDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((nextmonth) => {
      const nextMonthDate = new Date(nextmonth);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
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
    </>
  );
}

export default App;
