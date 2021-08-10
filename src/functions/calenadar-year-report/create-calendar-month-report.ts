import { CalendarMonthReport } from '../../models/calendar/calendar-year-report/calendar-month-report.model';
import { CalendarMonth } from 'src/models/calendar/calendar-month.model';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';

export function createCalendarMonthReport(
  calendarMonth: CalendarMonth
): CalendarMonthReport {
  let daysWorking = 0;
  let daysOff = 0;
  let daysToBeDefined = 0;

  calendarMonth.calendarDays.forEach((d) => {
    d.dayActivityType === DayActivityType.WORKING ? daysWorking++ : daysWorking;
    d.dayActivityType === DayActivityType.DAY_OFF ? daysOff++ : daysOff;
    d.dayActivityType === DayActivityType.TO_BE_DEFINED
      ? daysToBeDefined++
      : daysToBeDefined;
  });

  const report: CalendarMonthReport = {
    daysOff: daysOff,
    daysWorking: daysWorking,
    daysToBeDefined: daysToBeDefined,
    monthNameShort: calendarMonth.monthNameShort,
    monthNameLong: calendarMonth.monthNameLong,
  };
  console.log('report', report);
  return report;
}
