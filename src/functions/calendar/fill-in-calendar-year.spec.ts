import { CalendarYear } from 'src/models/calendar/calendar-year.model';
import { fillInCalendarMonths } from './fill-in-calendar-months';

describe('Fill In Calendar Year', () => {
  it('should return correct number of months', () => {
    const year = 2021;
    const obj: CalendarYear = {
      yearNumber: year,
      calendarMonths: fillInCalendarMonths(1, 12, year),
      monthLast: 12,
      monthFirst: 1,
    };

    expect(obj.calendarMonths.length).toEqual(12);
    expect(obj.yearNumber).toEqual(year);
  });
});
