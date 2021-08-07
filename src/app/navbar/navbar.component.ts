import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoScope, TranslocoService } from '@ngneat/transloco';
import { CALENDAR, HOME } from 'src/const/routes.const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private translocoService: TranslocoService
  ) {}
  activeLang: string;
  ngOnInit(): void {}

  goHome() {
    this.router.navigate([HOME]);
  }

  goToCalendar() {
    this.router.navigate([CALENDAR]);
  }
  onLangChange(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.activeLang = lang;
  }
}
