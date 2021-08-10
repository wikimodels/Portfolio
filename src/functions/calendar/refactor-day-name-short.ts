import { CalendarDay } from 'src/models/calendar/calendar-day.model';

export function refactorDayNameShort(day: CalendarDay): CalendarDay {
  switch (day.dayNameShort) {
    case 'Mon':
      day.dayNameShort = 'calendar.Mon';
      break;
    case 'Tue':
      day.dayNameShort = 'calendar.Tue';
      break;
    case 'Wed':
      day.dayNameShort = 'calendar.Wed';
      break;
    case 'Thu':
      day.dayNameShort = 'calendar.Thu';
      break;
    case 'Fri':
      day.dayNameShort = 'calendar.Fri';
      break;
    case 'Sat':
      day.dayNameShort = 'calendar.Sat';
      break;
    case 'Sun':
      day.dayNameShort = 'calendar.Sun';
      break;

    default:
      day.dayNameShort = day.dayNameShort;
  }

  return day;
}
