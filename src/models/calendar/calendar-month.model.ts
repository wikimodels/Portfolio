import { CalendarDay } from './calendar-day.model';

export interface CalendarMonth {
  monthNameLong: string;
  monthNameShort: string;
  monthNumberStr: string;
  daysInMonth: number;
  monthNumber: number;
  calendarDays: CalendarDay[];
}
