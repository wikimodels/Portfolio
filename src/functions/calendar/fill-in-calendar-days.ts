import * as moment from 'moment';
import { addLeadingZero } from './add-leading-zero';
import { DayMomentumType } from 'src/models/enums/day-momentum-type.enum';
import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';

import { refactorDayNameShort } from './refactor-day-name-short';

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

    let calendarDay: CalendarDay = {
      dayNameShort: moment(date).format('ddd'),
      dayNameLong: moment(date).format('dddd'),
      dayNumberNmr: i,
      dayNumberStr: addLeadingZero(i),
      dayOfWeek: moment(date).isoWeekday(),
      dayDateStr: moment(date).format('DD MMM YYYY'),
      dayActivityType: DayActivityType.TO_BE_DEFINED,
      dayMomentumType: DayMomentumType.PRESENT,
      dayCSS: 'mat-' + DayActivityType.TO_BE_DEFINED,
      monthNumber: monthNumber,
      yearNumber: yearNumber,
    };

    calendarDay = refactorDayNameShort(calendarDay);
    calendarDays.push(calendarDay);
  }

  return calendarDays;
}
