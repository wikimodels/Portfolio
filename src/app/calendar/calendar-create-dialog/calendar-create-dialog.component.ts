import { getSelectYearNumbers } from 'src/functions/util/get-select-year-numbers';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createCalendarDaysGrid } from 'src/functions/calendar/create-calendar-month-grid';
import { getCalendarYearCreateDialogForm } from 'src/functions/calendar/get-calendar-year-create-dialog-form';
import { getSelectMonthsNames } from 'src/functions/util/get-select-months-names';

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
    public dialogRef: MatDialogRef<CalendarCreateDialogComponent>
  ) {}

  ngOnInit(): void {
    this.form = getCalendarYearCreateDialogForm();
    this.months = getSelectMonthsNames('en');
    this.years = getSelectYearNumbers();
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {}
}
