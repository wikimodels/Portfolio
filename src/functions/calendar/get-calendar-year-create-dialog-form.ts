import { CalendarYear } from '../../models/calendar/calendar-year.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastMonthLessThanFirstMonth } from '../validators/last-month-less-than-first-month';

export function getCalendarYearCreateDialogForm(): FormGroup {
  const fb = new FormBuilder();
  const form = fb.group(
    {
      yearNumber: ['', Validators.compose([Validators.required])],
      monthFirst: ['', Validators.required],
      monthLast: ['', Validators.required],
    },
    { validators: [lastMonthLessThanFirstMonth] }
  );
  return form;
}
