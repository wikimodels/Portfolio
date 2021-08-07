import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CalendarYear } from 'src/models/calendar/calendar-year.model';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar-year',
  templateUrl: './calendar-year.component.html',
  styleUrls: ['./calendar-year.component.css'],
})
export class CalendarYearComponent implements OnInit, OnDestroy {
  sub: Subscription;
  calendarYear: CalendarYear;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.sub = this.calendarService.calendarYear$.subscribe((value) => {
      this.calendarYear = value;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
