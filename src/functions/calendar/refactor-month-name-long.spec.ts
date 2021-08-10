import { CalendarMonth } from 'src/models/calendar/calendar-month.model';

export function refactorMonthNameLong(month: CalendarMonth): CalendarMonth {
  switch (month.monthNameLong) {
    case 'January':
      month.monthNameLong = 'calendar.January';
      break;
    case 'February':
      month.monthNameLong = 'calendar.February';
      break;
    case 'March':
      month.monthNameLong = 'calendar.March';
      break;
    case 'April':
      month.monthNameLong = 'calendar.April';
      break;
    case 'May':
      month.monthNameLong = 'calendar.May';
      break;
    case 'June':
      month.monthNameLong = 'calendar.June';
      break;
    case 'July':
      month.monthNameLong = 'calendar.July';
      break;
    case 'August':
      month.monthNameLong = 'calendar.August';
      break;
    case 'September':
      month.monthNameLong = 'calendar.September';
      break;
    case 'October':
      month.monthNameLong = 'calendar.October';
      break;
    case 'November':
      month.monthNameLong = 'calendar.November';
      break;
    case 'December':
      month.monthNameLong = 'calendar.December';
      break;
    default:
      month.monthNameLong = month.monthNameLong;
  }
  return month;
}
