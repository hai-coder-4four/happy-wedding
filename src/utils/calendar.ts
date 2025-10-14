// Utility functions for calendar component

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};

export const getFirstDayOfWeek = (year: number, month: number): number => {
  // Returns 0-6 (0 = Monday, 1 = Tuesday, ..., 6 = Sunday)
  const firstDay = new Date(year, month - 1, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
};

export const generateCalendarGrid = (
  year: number,
  month: number,
  totalCells: number = 35
) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfWeek(year, month);
  const calendarDays = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // Add all days of the month
  for (
    let day = 1;
    day <= daysInMonth && calendarDays.length < totalCells;
    day++
  ) {
    calendarDays.push(day);
  }

  // Add days from next month to fill the grid
  for (let day = 1; calendarDays.length < totalCells; day++) {
    calendarDays.push(day);
  }

  return { calendarDays, daysInMonth, firstDayOfWeek };
};

export const dayNames = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "CN",
];
