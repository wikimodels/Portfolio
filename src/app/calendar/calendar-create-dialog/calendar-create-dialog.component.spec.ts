import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCreateDialogComponent } from './calendar-create-dialog.component';

xdescribe('CalendarCreateDialogComponent', () => {
  let component: CalendarCreateDialogComponent;
  let fixture: ComponentFixture<CalendarCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
