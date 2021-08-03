import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { addDaysAfterPresentMonth } from './add-days-after-present-month';
import { addDaysBeforePresentMonth } from './add-days-before-present-month';
import { fillInCalendarDays } from './fill-in-calendar-days';

export function createCalendarDaysGrid(
  monthNum: number,
  year: number
): CalendarDay[] {
  let days = fillInCalendarDays(monthNum, year);
  days = addDaysBeforePresentMonth(days, monthNum, year);
  days = addDaysAfterPresentMonth(days, monthNum, year);
  return days;
}
