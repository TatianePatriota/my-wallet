import months from "./data.json";

const today = new Date();

export function getMonths() {
  return months;
}

export function getMonth(index) {
  return months[index];
}

export const currentMonthIndex = today.getUTCMonth();
export function getCurrentMonth() {
  return months[currentMonthIndex];
}
