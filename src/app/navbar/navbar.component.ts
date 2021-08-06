import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CALENDAR, HOME } from 'src/const/routes.const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  goHome() {
    this.router.navigate([HOME]);
  }

  goToCalendar() {
    this.router.navigate([CALENDAR]);
  }
}
