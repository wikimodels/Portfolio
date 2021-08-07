import * as moment from 'moment';
import { SelectMonth } from 'src/models/utils/select-month.model';
import { addLeadingZero } from '../calendar/add-leading-zero';

export function getSelectMonthsNames(locale: string) {
  const months: SelectMonth[] = [];
  for (let i = 1; i <= 12; i++) {
    months.push({
      monthNumber: i,
      monthName: moment(addLeadingZero(i), 'MM').locale(locale).format('MMMM'),
    });
  }
  return months;
}
