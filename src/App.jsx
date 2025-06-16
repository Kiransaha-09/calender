import { useState } from "react";
import "./App.css";

import { formatedSelectedDate } from "./helpers/date.helpers";
import Calender from "./components/Calendar/Calender";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const data = [
    {
      name: "Accordion 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      name: "Accordion 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      name: "Accordion 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <div>
        <h3>Calendar</h3>
        <Calender
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <div className="selectedDate">
          {selectedDate && (
            <div>Selected: {formatedSelectedDate(selectedDate)}</div>
          )}
        </div>
      </div>
      <div>
        <h3>Accordion</h3>
        <Accordion data={data} allowOpenAll={true} />
        {/* Accordion component used here */}
      </div>
    </div>
  );
}

export default App;
