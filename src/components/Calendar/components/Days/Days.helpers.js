import {
  getFirstDayOfMonth,
  getFullYear,
} from "../../../../helpers/date.helpers";

export const getCalendarArray = (currentDate) => {
  const firstDay = getFirstDayOfMonth(currentDate);
  const daysInMonth = totalDaysInMonth(currentDate);

  const weeks = Math.ceil((firstDay + daysInMonth) / 7);

  const calendar = [];

  for (let i = 0; i < weeks; i++) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      // Calculate the day number
      const dayNumber = i * 7 + j - firstDay + 1;

      if (dayNumber > 0 && dayNumber <= daysInMonth) {
        week.push(dayNumber);
      } else {
        week.push(null);
      }
    }

    calendar.push(week);
  }

  return calendar;
};

function totalDaysInMonth(date) {
  return new Date(getFullYear(date), date.getMonth() + 1, 0).getDate();
}
