import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';
import { DayMomentumType } from 'src/models/enums/day-momentum-type.enum';
import { addDaysBeforePresentMonth } from './add-days-before-present-month';
import { fillInCalendarDays } from './fill-in-calendar-days';

describe('Add Days before Present Month', () => {
  it('should add correct first gird day for January-01 (Friday)', () => {
    const beforeDayOfJanuary2021: CalendarDay = {
      dayActivityType: DayActivityType.UNDEFINED,
      dayMomentumType: DayMomentumType.PAST,
      dayNameLong: 'Monday',
      dayNameShort: 'Mon',
      dayNumberNmr: 28,
      dayNumberStr: '28',
      dayOfWeek: 1,
      dayDateStr: '28 Dec 2020',
    };
    let days = fillInCalendarDays(1, 2021);
    let calendarGrid = addDaysBeforePresentMonth(days, 1, 2021);
    expect(calendarGrid[0]).toEqual(beforeDayOfJanuary2021);
  });

  it('should add correct first grid day for March-01 (Monday)', () => {
    const beforeDayOfMarch2021: CalendarDay = {
      dayActivityType: DayActivityType.TO_BE_DEFINED,
      dayMomentumType: DayMomentumType.PRESENT,
      dayNameLong: 'Monday',
      dayNameShort: 'Mon',
      dayNumberStr: '01',
      dayNumberNmr: 1,
      dayOfWeek: 1,
      dayDateStr: '01 Mar 2021',
    };

    let days = fillInCalendarDays(3, 2021);

    let calendarGrid = addDaysBeforePresentMonth(days, 3, 2021);

    expect(calendarGrid[0]).toEqual(beforeDayOfMarch2021);
  });
});
