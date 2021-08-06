import { CalendarYear } from 'src/models/calendar/calendar-year.model';
import { fillInCalendarMonths } from './fill-in-calendar-months';

export function fillInCalendarYear(
  monthActivityStart: number,
  monthActivityEnd: number,
  yearNumber: number
): CalendarYear {
  const year: CalendarYear = {
    yearNumber: yearNumber,

    monthLast: monthActivityStart,
    monthFirst: monthActivityEnd,
    calendarMonths: fillInCalendarMonths(
      monthActivityStart,
      monthActivityEnd,
      yearNumber
    ),
  };
  return year;
}
