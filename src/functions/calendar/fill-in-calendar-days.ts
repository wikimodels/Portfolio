import * as moment from 'moment';
import { addLeadingZero } from './add-leading-zero';
import { DayMomentumType } from 'src/models/enums/day-momentum-type.enum';
import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';
import { LOCALE } from 'src/const/locale.const';

export function fillInCalendarDays(monthNumber: number, yearNumber: number) {
  const calendarDays: CalendarDay[] = [];
  const numberDaysInMonth = moment(
    `${yearNumber}-${monthNumber}`,
    'YYYY-MM'
  ).daysInMonth();
  for (let i = 1; i <= numberDaysInMonth; i++) {
    const date = `${yearNumber}-${addLeadingZero(monthNumber)}-${addLeadingZero(
      i
    )}`;

    const calendarDay: CalendarDay = {
      dayNameShort: moment(date).locale(LOCALE).format('ddd'),
      dayNameLong: moment(date).locale(LOCALE).format('dddd'),
      dayNumberNmr: i,
      dayNumberStr: addLeadingZero(i),
      dayOfWeek: moment(date).isoWeekday(),
      dayDateStr: moment(date).locale(LOCALE).format('DD MMM YYYY'),
      dayActivityType: DayActivityType.TO_BE_DEFINED,
      dayMomentumType: DayMomentumType.PRESENT,
      dayCSS: 'mat-' + DayActivityType.TO_BE_DEFINED,
      monthNumber: monthNumber,
      yearNumber: yearNumber,
    };
    calendarDays.push(calendarDay);
  }
  return calendarDays;
}
