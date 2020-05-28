function centuryFromYear(year) {
  let reminder;
  reminder = year % 100;
  year = (year - reminder) / 100;
  if (reminder > 0 && reminder < 100) {
    reminder = 1;
  }
  year += reminder;
  return year;
}
centuryFromYear(1905);
// another solution
/* function centuryFromYear(year) {
  if (year < 100) {
    year = Math.ceil(year / 10000);
  } else if (year < 1000) {
    year = Math.ceil(year / 100);
  } else if (year > 1000) {
    year = Math.ceil(year / 100);
  }
  return year;
}
centuryFromYear(1905); */
