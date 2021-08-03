import { CalendarMonth } from './calendar-month.model';

export interface CalendarYear {
  monthFirst: number;
  monthLast: number;
  yearNumber: number;
  calendarMonths: CalendarMonth[];
}
