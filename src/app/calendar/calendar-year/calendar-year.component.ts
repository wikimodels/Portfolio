import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
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

  @ViewChild('accordion', { static: false }) accordion: MatAccordion;
  hideButton = false;

  ngOnInit(): void {
    this.sub = this.calendarService.calendarYear$.subscribe((value) => {
      this.calendarYear = value;
    });
  }

  openAll() {
    this.accordion.openAll();
    this.hideButton = !this.hideButton;
  }

  closeAll() {
    this.accordion.closeAll();
    this.hideButton = !this.hideButton;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
