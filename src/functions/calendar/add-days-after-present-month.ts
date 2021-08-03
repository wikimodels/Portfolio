import * as moment from 'moment';
import { LOCALE } from 'src/const/locale.const';
import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';

import { DayMomentumType } from 'src/models/enums/day-momentum-type.enum';
import { addLeadingZero } from './add-leading-zero';

export function addDaysAfterPresentMonth(
  days: CalendarDay[],
  month: number,
  year: number
): CalendarDay[] {
  const lastDayOfMonthDate = `${year}-${addLeadingZero(month)}-${
    days[days.length - 1].dayNumberStr
  }`;

  const lastDayOfWeek = days[days.length - 1].dayOfWeek;
  console.log('first day of week', lastDayOfWeek);

  for (let i = 1; i <= 7 - lastDayOfWeek; i++) {
    const dayAfter: CalendarDay = {
      dayNameShort: moment(lastDayOfMonthDate)
        .add(i, 'days')
        .locale(LOCALE)
        .format('ddd'),
      dayNameLong: moment(lastDayOfMonthDate)
        .add(i, 'days')
        .locale(LOCALE)
        .format('dddd'),
      dayNumberStr: addLeadingZero(
        moment(lastDayOfMonthDate).add(i, 'days').date()
      ),
      dayNumberNmr: moment(lastDayOfMonthDate).add(i, 'days').date(),
      dayOfWeek: moment(lastDayOfMonthDate).add(i, 'days').isoWeekday(),
      dayActivityType: DayActivityType.TO_BE_DEFINED,
      dayDateStr: moment(lastDayOfMonthDate)
        .add(i, 'days')
        .locale(LOCALE)
        .format('DD MMM YYYY'),
      dayMomentumType: DayMomentumType.FUTURE,
    };
    days.push(dayAfter);
  }
  console.log('AFTER DAYS', days);
  return days;
}
