import { DayActivityType } from './../../models/enums/day-activity-type.enum';
import { fillInCalendarDays } from './fill-in-calendar-days';

describe('Fill In Calendar Days', () => {
  it('should correct number of days for january (31)', () => {
    const obj = fillInCalendarDays(1, 2021);

    expect(obj.length).toEqual(31);
    expect(obj[0].yearNumber).toEqual(2021);
    expect(obj[0].monthNumber).toEqual(1);
    expect(obj[0].dayNameLong).toEqual('Friday');
    expect(obj[0].dayNameShort).toEqual('Fri');
    expect(obj[0].dayNumberNmr).toEqual(1);
    expect(obj[0].dayNumberStr).toEqual('01');
    expect(obj[0].dayActivityType).toEqual(DayActivityType.TO_BE_DEFINED);
    expect(obj.length).toEqual(31);
  });
});
