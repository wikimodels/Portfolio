import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CALENDAR, HOME } from 'src/const/routes.const';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: HOME,
    pathMatch: 'full',
  },
  {
    path: HOME,
    component: HomeComponent,
  },
  {
    path: CALENDAR,
    loadChildren: () =>
      import('./calendar/calendar.module').then((m) => m.CalendarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
