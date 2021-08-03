import * as moment from 'moment';
import { LOCALE } from 'src/const/locale.const';
import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';

import { DayMomentumType } from 'src/models/enums/day-momentum-type.enum';
import { addLeadingZero } from './add-leading-zero';

export function addDaysBeforePresentMonth(
  days: CalendarDay[],
  month: number,
  year: number
): CalendarDay[] {
  const firstDayOfMonthDate = `${year}-${addLeadingZero(month)}-${
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
      dayActivityType: DayActivityType.UNDEFINED,
      dayMomentumType: DayMomentumType.PAST,
    };
    days.unshift(dayBefore);
  }

  console.log('BEFORE DAYS', days);
  return days;
}

export function getMonthNumber(data: string) {
  const monthNumber = moment(data).subtract(1, 'day').month('N');
}