import { useState } from "react";
import "./App.css";

import { formatedSelectedDate } from "./helpers/date.helpers";
import Calender from "./components/Calender";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <Calender setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
      <div className="selectedDate">
        {selectedDate && (
          <div>Selected: {formatedSelectedDate(selectedDate)}</div>
        )}
      </div>
    </>
  );
}

export default App;
