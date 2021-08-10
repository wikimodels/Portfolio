import { CalendarMonthReport } from 'src/models/calendar/calendar-year-report/calendar-month-report.model';
import { CalendarYearReport } from 'src/models/calendar/calendar-year-report/calendar-year-report.model';
import { CalendarYear } from 'src/models/calendar/calendar-year.model';
import { createCalendarMonthReport } from './create-calendar-month-report';

export function createCalendarYearReport(
  calendarYear: CalendarYear
): CalendarYearReport {
  const calendarMonthReports: CalendarMonthReport[] = [];
  calendarYear.calendarMonths.forEach((m) => {
    calendarMonthReports.push(createCalendarMonthReport(m));
  });
  const report: CalendarYearReport = {
    yearNumber: calendarYear.yearNumber,
    calendarMonthReports: calendarMonthReports,
  };
  return report;
}
