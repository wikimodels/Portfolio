import { CalendarCreateDialogComponent } from './calendar-create-dialog/calendar-create-dialog.component';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { getSelectYearNumbers } from 'src/functions/util/get-select-year-numbers';
import { CalendarYear } from 'src/models/calendar/calendar-year.model';
import { CalendarService } from './services/calendar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalendarShowDialogComponent } from './calendar-show-dialog/calendar-show-dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit, OnDestroy {
  yearsNumbers = [];
  windowHeight: string;
  calendarYear: CalendarYear;
  sub: Subscription;

  constructor(
    private calendarService: CalendarService,
    private matDialog: MatDialog
  ) {
    this.sub = this.calendarService.calendarYear$.subscribe((value) => {
      this.calendarYear = value;
    });
  }

  ngOnInit(): void {
    this.yearsNumbers = getSelectYearNumbers();
  }

  openCreateYearDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(CalendarCreateDialogComponent, dialogConfig);
  }

  openShowYearDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = window.innerHeight * 0.9 + 'px';
    dialogConfig.minWidth = window.innerWidth * 0.75 + 'px';
    this.matDialog.open(CalendarShowDialogComponent, dialogConfig);
  }

  closeAll() {}

  openAll() {}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
