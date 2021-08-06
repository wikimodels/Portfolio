import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CalendarDay } from 'src/models/calendar/calendar-day.model';
import { DayMomentumType } from 'src/models/enums/day-momentum-type.enum';
import { DayActivityType } from 'src/models/enums/day-activity-type.enum';
import { CalendarShowDialogComponent } from '../calendar-show-dialog/calendar-show-dialog.component';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css'],
})
export class CalendarDayComponent implements OnInit {
  @Input() day: CalendarDay;

  dayDisabled: boolean;
  dayIsWorking: boolean;
  date: string;

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    //private snackbar: BasicSnackbarService,
    private timeService: TimeService,
    //private calendarYearViewService: CalendarYearViewService,
    public deviceDetectorService: DeviceDetectorService
  ) {}

  ngOnInit(): void {
    this.dayDisabled =
      this.day.dayMomentumType === DayMomentumType.FUTURE ||
      this.day.dayMomentumType === DayMomentumType.PAST
        ? true
        : false;

    this.dayIsWorking =
      this.day.dayActivityType === DayActivityType.WORKING ? true : false;

    this.date = this.timeService.get_DD_MMMM_YYYY_Str(
      this.day.dayNumberNmr,
      this.day.monthNumber,
      this.day.yearNumber
    );
  }

  addIncomeRecord() {
    const dialogConfig = new MatDialogConfig();
    // const data: CalendarIncomeDialogRecord = {
    //   title: defaults.addIncomeRecordTitle,
    //   dayNumber: this.day.dayNumber,
    //   monthNumber: this.day.monthNumber,
    //   date: this.date,
    //   incomeTypes: this.incomeTypes,
    //   yearNumber: this.day.yearNumber,
    // };

    //dialogConfig.data = data;
    const dialogRef = this.matDialog.open(
      CalendarShowDialogComponent,
      dialogConfig
    );

    // dialogRef.afterClosed().subscribe(
    //   (value: { date: string; sum: number }) => {
    //     if (value) {
    //       this.snackbar.open(
    //         `${value.date}: ${value.sum}руб`,
    //         MessageType.INFO
    //       );
    //     }
    //   },
    //   (error) => {
    //     this.snackbar.open('Упппссс... Произошла ошибка!', MessageType.WARNING);
    //   }
    // );
  }

  changeToWorkingDay() {
    // this.vibrationService.vibrate({ duration: 10, interval: 1, count: 1 });
    this.dayIsWorking = true;
    this.day.dayActivityType = DayActivityType.WORKING;
    this.day.dayActivityType = DayActivityType.WORKING;
    //this.calendarYearViewService.updateCalendarDay(this.day);
  }

  changeToDayOff() {
    this.dayIsWorking = false;
    this.day.dayActivityType = DayActivityType.DAY_OFF;
    this.day.dayActivityType = DayActivityType.DAY_OFF;
    //this.calendarYearViewService.updateCalendarDay(this.day);
  }

  changeToBeDefined() {
    this.dayIsWorking = false;
    this.day.dayActivityType = DayActivityType.TO_BE_DEFINED;
    this.day.dayActivityType = DayActivityType.TO_BE_DEFINED;
    //this.calendarYearViewService.updateCalendarDay(this.day);
  }

  ngOnDestroy() {}
}
