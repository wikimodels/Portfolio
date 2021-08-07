import { getCalendarYearCreateDialogForm } from './get-calendar-year-create-dialog-form';

describe('Create Calendar Year Form ', () => {
  it('should return form with yearNumber, monthFirst, monthLast properties', () => {
    const form = getCalendarYearCreateDialogForm();
    expect(form.get('yearNumber')).toBeTrue;
    expect(form.get('monthFirst')).toBeTrue;
    expect(form.get('monthLast')).toBeTrue;
  });

  it('should return correct last grid element for Jaunary, 2021', () => {});

  it('should return correct first grid element for August, 2021', () => {});

  it('should return correct last grid element for August, 2021', () => {});
});
