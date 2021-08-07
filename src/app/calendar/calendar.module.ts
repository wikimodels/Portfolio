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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

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
    FormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    ReactiveFormsModule,
    TranslocoModule,
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'calendar' }],
})
export class CalendarModule {}
