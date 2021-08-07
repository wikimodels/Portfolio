import { AbstractControl, ValidationErrors } from '@angular/forms';

export function lastMonthLessThanFirstMonth(
  control: AbstractControl
): ValidationErrors | null {
  const monthFirst = control.get('monthFirst').value;

  const monthLast = control.get('monthLast').value;

  if (monthFirst != '' && monthLast != '' && monthFirst > monthLast) {
    return { monthLastLessThanMonthFirst: true };
  }
  return null;
}
