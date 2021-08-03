import { fillInCalendarMonths } from './fill-in-calendar-months';

describe('Fill In Calendar Months', () => {
  it('should return correct months', () => {
    const obj = fillInCalendarMonths(1, 12, 2021);

    expect(obj.length).toEqual(12);
    expect(obj[0].monthNameLong).toEqual('January');
    expect(obj[0].monthNameShort).toEqual('Jan');
    expect(obj[0].daysInMonth).toEqual(31);
    expect(obj[0].monthNumber).toEqual(1);
    expect(obj[0].monthNumberStr).toEqual('01');
    expect(obj[0].calendarDays.length).toEqual(35);
    expect(obj[1].calendarDays.length).toEqual(28);
  });
});
