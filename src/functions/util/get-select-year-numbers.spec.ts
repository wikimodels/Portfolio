import * as moment from 'moment';
import { getSelectYearNumbers } from './get-select-year-numbers';

describe('Select Year Number', () => {
  it('should return correct year numbers for Select Year Options', () => {
    const yearNumbers = getSelectYearNumbers();
    expect(yearNumbers.length).toEqual(10);
    expect(yearNumbers[0].key).toEqual(moment().year());
    expect(yearNumbers[0].value).toEqual(moment().year());

    expect(yearNumbers[9].key).toEqual(moment().year() + 9);
    expect(yearNumbers[9].value).toEqual(moment().year() + 9);
  });
});
