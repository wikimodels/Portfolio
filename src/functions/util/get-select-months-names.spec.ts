import { getSelectMonthsNames } from './get-select-months-names';

describe('Get Select Month names ', () => {
  it('should return correct months names for ru-locale', () => {
    const array = getSelectMonthsNames();
    console.log('months', array);
    expect(array[0].monthName).toEqual('январь');
    expect(array[0].monthNumber).toEqual(1);
  });

  it('should return correct months names for en-locale', () => {
    const array = getSelectMonthsNames();
    console.log('monthsNames', array);
    expect(array[0].monthName).toEqual('January');
    expect(array[0].monthNumber).toEqual(1);
  });
});
