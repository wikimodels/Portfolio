import { CalendarMonthReport } from './calendar-month-report.model';

export interface CalendarYearReport {
  yearNumber: number;
  calendarMonthReports: CalendarMonthReport[];
}
