import { format } from "date-fns";

export function queryAfterThisDate(date = new Date()) {
  return `created:>${format(date, "YYYY-MM-DD")}`;
}

export function queryBeforeThisDate(date = new Date()) {
  return `created:<${format(date, "YYYY-MM-DD")}`;
}

export function queryOnThisDate(date = new Date()) {
  return `created:=${format(date, "YYYY-MM-DD")}`;
}
