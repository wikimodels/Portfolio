import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { fillInCalendarYear } from 'src/functions/calendar/fill-in-calendar-year';
import { CalendarYear } from 'src/models/calendar/calendar-year.model';
import { CalendarShowDialogComponent } from '../calendar-show-dialog/calendar-show-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}
  currentYear: CalendarYear = this.createCalendarYear(1, 12, moment().year());
  private _calendarYearSubj = new BehaviorSubject<CalendarYear>(
    this.currentYear
  );

  calendarYear$ = this._calendarYearSubj.asObservable();

  setCalendarYear(calendarYear: CalendarYear) {
    this._calendarYearSubj.next(calendarYear);
  }
  getCalendarYear(): CalendarYear {
    return this._calendarYearSubj.getValue();
  }

  createCalendarYear(
    monthFirst: number,
    monthLast: number,
    yearNumber: number
  ): CalendarYear {
    return fillInCalendarYear(monthFirst, monthLast, yearNumber);
  }
}
