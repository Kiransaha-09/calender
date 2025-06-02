export const getIsDateCurrentMonth = (date) => {
  const now = new Date();

  const isCurrentMonth =
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  return isCurrentMonth;
};

export const getTodayDate = (date) => {
  const today = getIsDateCurrentMonth(date) ? new Date().getDate() : null;
  return today;
};

export const getFirstDayOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

export const getFullYear = (date) => {
  return date.getFullYear();
};

export const addMonth = (date, incrementBy = 0) => {
  const year = getFullYear(date);
  const month = date.getMonth() + incrementBy;
  return new Date(year, month, 1);
};
export const formatedSelectedDate = (date) => {
  const selectDate = date.getDate();
  const selectMonth = date.getMonth() + 1;
  const selectyear = getFullYear(date);

  return `${selectDate}/${selectMonth}/${selectyear}`;
};
