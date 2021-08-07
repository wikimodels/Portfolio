import { getCalendarYearCreateDialogForm } from 'src/functions/calendar/get-calendar-year-create-dialog-form';

import { lastMonthLessThanFirstMonth } from './last-month-less-than-first-month';

describe('Last Month is More than First Month validation ', () => {
  it('should return true if monthFirst-value less than monthLast-value', () => {
    const form = getCalendarYearCreateDialogForm();
    form.setValue({ monthFirst: 2, monthLast: 1, yearNumber: 2000 });
    const error = lastMonthLessThanFirstMonth(form);
    expect(error.monthLastLessThanMonthFirst).toEqual(true);
  });
});
