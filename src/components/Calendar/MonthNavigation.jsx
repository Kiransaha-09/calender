const MonthNavigation = ({ handleNextMonth, handlePerviousMonth }) => {
  return (
    <div className="navigation-container">
      <div onClick={handlePerviousMonth}>＜</div>
      <div onClick={handleNextMonth}>＞</div>
    </div>
  );
};

export default MonthNavigation;
