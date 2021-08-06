import * as moment from 'moment';
export function getSelectYearNumbers() {
  const yearNumbers = [];
  for (let i = moment().year(); i < moment().year() + 10; i++) {
    yearNumbers.push({ key: i, value: i });
  }
  return yearNumbers;
}
