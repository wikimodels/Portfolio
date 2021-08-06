import { DayActivityType } from '../enums/day-activity-type.enum';
import { DayMomentumType } from '../enums/day-momentum-type.enum';

export interface CalendarDay {
  dayNameLong: string;
  dayNameShort: string;
  dayNumberNmr: number;
  dayNumberStr: string;
  dayDateStr: string;
  dayOfWeek: number;
  dayCSS: string;
  dayActivityType: DayActivityType;
  dayMomentumType: DayMomentumType;
  monthNumber: number;
  yearNumber: number;
}
