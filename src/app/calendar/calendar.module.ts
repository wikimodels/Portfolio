import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { CalendarYearComponent } from './calendar-year/calendar-year.component';

import { CalendarCreateDialogComponent } from './calendar-create-dialog/calendar-create-dialog.component';
import { CalendarShowDialogComponent } from './calendar-show-dialog/calendar-show-dialog.component';
import { AppMaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
    CalendarCreateDialogComponent,
    CalendarShowDialogComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    CalendarRoutingModule,
    FlexLayoutModule,
  ],
})
export class CalendarModule {}
