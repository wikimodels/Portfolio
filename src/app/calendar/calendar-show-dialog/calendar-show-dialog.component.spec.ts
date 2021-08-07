import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarShowDialogComponent } from './calendar-show-dialog.component';

xdescribe('CalendarShowDialogComponent', () => {
  let component: CalendarShowDialogComponent;
  let fixture: ComponentFixture<CalendarShowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarShowDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarShowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
