import { CalendarMonth } from 'src/models/calendar/calendar-month.model';

export function refactorMonthNameShort(month: CalendarMonth): CalendarMonth {
  switch (month.monthNameShort) {
    case 'Jan':
      month.monthNameShort = 'calendar.Jan';
      break;
    case 'Feb':
      month.monthNameShort = 'calendar.Feb';
      break;
    case 'Mar':
      month.monthNameShort = 'calendar.Mar';
      break;
    case 'Apr':
      month.monthNameShort = 'calendar.Apr';
      break;
    case 'May':
      month.monthNameShort = 'calendar.May';
      break;
    case 'Jun':
      month.monthNameShort = 'calendar.Jun';
      break;
    case 'Jul':
      month.monthNameShort = 'calendar.Jul';
      break;
    case 'Aug':
      month.monthNameShort = 'calendar.Aug';
      break;
    case 'Sep':
      month.monthNameShort = 'calendar.Sep';
      break;
    case 'Oct':
      month.monthNameShort = 'calendar.Oct';
      break;
    case 'Nov':
      month.monthNameShort = 'calendar.Nov';
      break;
    case 'Dec':
      month.monthNameShort = 'calendar.Dec';
      break;
    default:
      month.monthNameShort = month.monthNameShort;
  }

  return month;
}
