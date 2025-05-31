function Weekdays() {
  const weekNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return (
    <div className="week-container">
      {weekNames.map((week, key) => (
        <div key={key}>{week}</div>
      ))}
    </div>
  );
}

export default Weekdays;
