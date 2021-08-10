import { getSelectYearNumbers } from 'src/functions/util/get-select-year-numbers';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createCalendarDaysGrid } from 'src/functions/calendar/create-calendar-month-grid';
import { getCalendarYearCreateDialogForm } from 'src/functions/calendar/get-calendar-year-create-dialog-form';
import { getSelectMonthsNames } from 'src/functions/util/get-select-months-names';
import { CalendarService } from '../services/calendar.service';
import { CalendarYear } from 'src/models/calendar/calendar-year.model';
import { calendarFormat } from 'moment';

@Component({
  selector: 'app-calendar-create-dialog',
  templateUrl: './calendar-create-dialog.component.html',
  styleUrls: ['./calendar-create-dialog.component.css'],
})
export class CalendarCreateDialogComponent implements OnInit {
  form: FormGroup;
  months: any[];
  years: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CalendarCreateDialogComponent>,
    private calendarService: CalendarService
  ) {}

  ngOnInit(): void {
    this.form = getCalendarYearCreateDialogForm();
    this.months = getSelectMonthsNames();
    this.years = getSelectYearNumbers();
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.valid) {
      const monthFirst = this.form.get('monthFirst').value;
      const monthLast = this.form.get('monthLast').value;
      const yearNumber = this.form.get('yearNumber').value;
      const calendarYear: CalendarYear =
        this.calendarService.createCalendarYear(
          monthFirst,
          monthLast,
          yearNumber
        );
      this.calendarService.setCalendarYear(calendarYear);
      this.dialogRef.close();
    }
  }
}
