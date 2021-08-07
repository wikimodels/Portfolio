import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';
import { DayMomentumType } from 'src/models/enums/day-momentum-type.enum';
import { addDaysAfterPresentMonth } from './add-days-after-present-month';

import { fillInCalendarDays } from './fill-in-calendar-days';

describe('Add Days after Present Month', () => {
  it('should add correct days after January-01 (Friday) 2021', () => {
    const afterDayOfJanuary2021: CalendarDay = {
      dayNameShort: 'Sun',
      dayNameLong: 'Sunday',
      dayNumberNmr: 31,
      dayNumberStr: '31',
      dayOfWeek: 7,
      dayDateStr: '31 Jan 2021',
      dayActivityType: DayActivityType.TO_BE_DEFINED,
      dayMomentumType: DayMomentumType.PRESENT,
      monthNumber: 1,
      yearNumber: 2021,
      dayCSS: 'mat-' + DayActivityType.TO_BE_DEFINED,
    };

    let days = fillInCalendarDays(1, 2021);
    let calendarGrid = addDaysAfterPresentMonth(days, 1, 2021);

    expect(calendarGrid[calendarGrid.length - 1]).toEqual(
      afterDayOfJanuary2021
    );
  });

  it('should add correct last day for March-grid (April-04, Monday)', () => {
    const afterDayOfMarch2021: CalendarDay = {
      dayNameShort: 'Sun',
      dayNameLong: 'Sunday',
      dayNumberStr: '04',
      dayNumberNmr: 4,
      dayOfWeek: 7,
      dayActivityType: DayActivityType.UNDEFINED,
      dayDateStr: '04 Apr 2021',
      dayMomentumType: DayMomentumType.FUTURE,
      monthNumber: 4,
      yearNumber: 2021,
      dayCSS: 'mat-' + DayActivityType.UNDEFINED,
    };
    let days = fillInCalendarDays(3, 2021);
    let calendarGrid = addDaysAfterPresentMonth(days, 3, 2021);
    console.log(calendarGrid[calendarGrid.length - 1]);
    expect(calendarGrid[calendarGrid.length - 1]).toEqual(afterDayOfMarch2021);
  });
});
