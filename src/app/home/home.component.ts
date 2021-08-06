import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CALENDAR } from 'src/const/routes.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  hidden = false;
  ngOnInit(): void {}
  goToCalendar() {
    this.router.navigate([CALENDAR]);
  }
}
