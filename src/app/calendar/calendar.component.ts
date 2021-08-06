import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { getSelectYearNumbers } from 'src/functions/util/getSelectYearNumbers';
import { CalendarYear } from 'src/models/calendar/calendar-year.model';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit, OnDestroy {
  yearsNumbers = [];
  calendarYear: CalendarYear;
  sub: Subscription;

  constructor(private calendarService: CalendarService) {
    this.sub = this.calendarService.calendarYear$.subscribe((value) => {
      this.calendarYear = value;
    });
  }

  ngOnInit(): void {
    this.yearsNumbers = getSelectYearNumbers();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
