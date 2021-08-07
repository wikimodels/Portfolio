import * as moment from 'moment';
import { LOCALE } from 'src/const/locale.const';
import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';

import { DayMomentumType } from 'src/models/enums/day-momentum-type.enum';
import { addLeadingZero } from './add-leading-zero';

export function addDaysBeforePresentMonth(
  days: CalendarDay[],
  monthNumber: number,
  yearNumber: number
): CalendarDay[] {
  const firstDayOfMonthDate = `${yearNumber}-${addLeadingZero(monthNumber)}-${
    days[0].dayNumberStr
  }`;

  const firstDayOfWeek = days[0].dayOfWeek;

  for (let i = 0; i < firstDayOfWeek - 1; i++) {
    const dayBefore: CalendarDay = {
      dayNameShort: moment(firstDayOfMonthDate)
        .date(-i)
        .locale(LOCALE)
        .format('ddd'),
      dayNameLong: moment(firstDayOfMonthDate)
        .date(-i)
        .locale(LOCALE)
        .format('dddd'),
      dayNumberStr: addLeadingZero(moment(firstDayOfMonthDate).date(-i).date()),
      dayNumberNmr: moment(firstDayOfMonthDate).date(-i).date(),
      dayOfWeek: moment(firstDayOfMonthDate).date(-i).isoWeekday(),
      dayDateStr: moment(firstDayOfMonthDate)
        .date(-i)
        .locale(LOCALE)
        .format('DD MMM YYYY'),
      dayMomentumType: DayMomentumType.PAST,
      dayActivityType: DayActivityType.UNDEFINED,
      dayCSS: 'mat-' + DayActivityType.UNDEFINED,
      monthNumber: moment(firstDayOfMonthDate).date(-i).month() + 1,
      yearNumber: moment(firstDayOfMonthDate).date(-i).year(),
    };
    days.unshift(dayBefore);
  }
  return days;
}

export function getMonthNumber(data: string) {
  const monthNumber = moment(data).subtract(1, 'day').month('N');
}
