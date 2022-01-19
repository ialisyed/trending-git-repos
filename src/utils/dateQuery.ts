import { format } from "date-fns";

const DATE_FORMAT = "yyyy-MM-dd";

export function queryAfterThisDate(date = new Date()) {
  console.log(format(date, "yyyy-MM-dd"));
  return `created:>${format(date, DATE_FORMAT)}`;
}

export function queryBeforeThisDate(date = new Date()) {
  return `created:<${format(date, DATE_FORMAT)}`;
}

export function queryOnThisDate(date = new Date()) {
  return `created:=${format(date, DATE_FORMAT)}`;
}
