/**
 * Functions in this file creates date queries for Github Apis
 *
 * Reference: https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax
 */

import { format } from "date-fns";

const DATE_FORMAT = "yyyy-MM-dd";

/**
 * creates [Github search query](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
 * to search data created after the provided date
 * @param date
 * @returns github query
 */
export function queryAfterThisDate(date = new Date()) {
  return `created:>${format(date, DATE_FORMAT)}`;
}

/**
 * creates [Github search query](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
 * to search data created before the provided date
 * @param date
 * @returns github query
 */
export function queryBeforeThisDate(date = new Date()) {
  return `created:<${format(date, DATE_FORMAT)}`;
}

/**
 * creates [Github search query](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
 * to search data created on the provided date
 * @param date
 * @returns github query
 */
export function queryOnThisDate(date = new Date()) {
  return `created:=${format(date, DATE_FORMAT)}`;
}
