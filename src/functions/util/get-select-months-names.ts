import * as moment from 'moment';
import { SelectMonth } from 'src/models/utils/select-month.model';

export function getSelectMonthsNames() {
  const months: SelectMonth[] = [];
  months.push({ monthName: 'calendar.January', monthNumber: 1 });
  months.push({ monthName: 'calendar.February', monthNumber: 2 });
  months.push({ monthName: 'calendar.March', monthNumber: 3 });
  months.push({ monthName: 'calendar.April', monthNumber: 4 });
  months.push({ monthName: 'calendar.May', monthNumber: 5 });
  months.push({ monthName: 'calendar.June', monthNumber: 6 });
  months.push({ monthName: 'calendar.July', monthNumber: 7 });
  months.push({ monthName: 'calendar.August', monthNumber: 8 });
  months.push({ monthName: 'calendar.September', monthNumber: 9 });
  months.push({ monthName: 'calendar.October', monthNumber: 10 });
  months.push({ monthName: 'calendar.November', monthNumber: 11 });
  months.push({ monthName: 'calendar.December', monthNumber: 12 });
  return months;
}
