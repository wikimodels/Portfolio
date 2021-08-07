import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar-show-dialog',
  templateUrl: './calendar-show-dialog.component.html',
  styleUrls: ['./calendar-show-dialog.component.css'],
})
export class CalendarShowDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CalendarShowDialogComponent>
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
