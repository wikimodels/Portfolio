import { CalendarYearReport } from 'src/models/calendar/calendar-year-report/calendar-year-report.model';
import { CalendarYear } from './../../../models/calendar/calendar-year.model';
import { Subscription } from 'rxjs';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarService } from '../services/calendar.service';
import { createCalendarYearReport } from 'src/functions/calenadar-year-report/create-calendar-year-report';

@Component({
  selector: 'app-calendar-show-dialog',
  templateUrl: './calendar-show-dialog.component.html',
  styleUrls: ['./calendar-show-dialog.component.css'],
})
export class CalendarShowDialogComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CalendarShowDialogComponent>,
    private calendarService: CalendarService
  ) {}

  sub: Subscription;
  calendarYearReport: CalendarYearReport;

  ngOnInit(): void {
    this.sub = this.calendarService.calendarYear$.subscribe((value) => {
      this.calendarYearReport = createCalendarYearReport(value);
      console.log(this.calendarYearReport);
    });
  }

  close() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
