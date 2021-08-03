import * as moment from 'moment';

import { addLeadingZero } from './add-leading-zero';
import { createCalendarDaysGrid } from './create-calendar-month-grid';

import { CalendarMonth } from 'src/models/calendar/calendar-month.model';
import { LOCALE } from 'src/const/locale.const';

export function fillInCalendarMonths(
  monthActivityStart: number,
  monthActivityEnd: number,
  yearNumber: number
): CalendarMonth[] {
  const calendarMonths: CalendarMonth[] = [];
  for (let i = monthActivityStart; i <= monthActivityEnd; i++) {
    const month: CalendarMonth = {
      monthNameLong: moment(i, 'MM').locale(LOCALE).format('MMMM'),
      monthNameShort: moment(i, 'MM').locale(LOCALE).format('MMM'),
      daysInMonth: moment(`${yearNumber}-${addLeadingZero(i)}`).daysInMonth(),
      calendarDays: createCalendarDaysGrid(i, yearNumber),
      monthNumber: i,
      monthNumberStr: addLeadingZero(i),
    };
    calendarMonths.push(month);
  }
  console.log('CALENDAR MONTH', calendarMonths);
  return calendarMonths;
}
