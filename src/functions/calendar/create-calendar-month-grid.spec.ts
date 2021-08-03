import { createCalendarDaysGrid } from './create-calendar-month-grid';

describe('Create Calendar Month Grid ', () => {
  it('should return correct first grid element for Jaunary, 2021', () => {
    const grid = createCalendarDaysGrid(1, 2021);
    expect(grid[0].dayOfWeek).toEqual(1);
    expect(grid[0].dayDateStr).toEqual('28 Dec 2020');
    expect(grid[0].dayNameLong).toEqual('Monday');
  });

  it('should return correct last grid element for Jaunary, 2021', () => {
    const grid = createCalendarDaysGrid(1, 2021);
    expect(grid[grid.length - 1].dayOfWeek).toEqual(7);
    expect(grid[grid.length - 1].dayDateStr).toEqual('31 Jan 2021');
    expect(grid[grid.length - 1].dayNameLong).toEqual('Sunday');
  });

  it('should return correct first grid element for August, 2021', () => {
    const grid = createCalendarDaysGrid(8, 2021);
    expect(grid[0].dayOfWeek).toEqual(1);
    expect(grid[0].dayDateStr).toEqual('26 Jul 2021');
    expect(grid[0].dayNameLong).toEqual('Monday');
  });

  it('should return correct last grid element for August, 2021', () => {
    const grid = createCalendarDaysGrid(8, 2021);
    expect(grid[grid.length - 1].dayOfWeek).toEqual(7);
    expect(grid[grid.length - 1].dayDateStr).toEqual('05 Sep 2021');
    expect(grid[grid.length - 1].dayNameLong).toEqual('Sunday');
  });
});
