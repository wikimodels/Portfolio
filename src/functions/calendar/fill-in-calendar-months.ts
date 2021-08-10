import * as moment from 'moment';

import { addLeadingZero } from './add-leading-zero';
import { createCalendarDaysGrid } from './create-calendar-month-grid';

import { CalendarMonth } from 'src/models/calendar/calendar-month.model';
import { refactorMonthNameShort } from './refactor-month-name-short';
import { refactorMonthNameLong } from './refactor-month-name-long.spec';

export function fillInCalendarMonths(
  monthActivityStart: number,
  monthActivityEnd: number,
  yearNumber: number
): CalendarMonth[] {
  const calendarMonths: CalendarMonth[] = [];
  for (let i = monthActivityStart; i <= monthActivityEnd; i++) {
    let month: CalendarMonth = {
      monthNameLong: moment(i, 'MM').format('MMMM'),
      monthNameShort: moment(i, 'MM').format('MMM'),
      daysInMonth: moment(`${yearNumber}-${addLeadingZero(i)}`).daysInMonth(),
      calendarDays: createCalendarDaysGrid(i, yearNumber),
      monthNumber: i,
      monthNumberStr: addLeadingZero(i),
    };

    month = refactorMonthNameLong(month);
    month = refactorMonthNameShort(month);
    calendarMonths.push(month);
  }
  return calendarMonths;
}
