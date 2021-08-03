import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  hidden = false;
  ngOnInit(): void {}
  fuckIt() {
    this.hidden = !this.hidden;
    console.log(this.hidden);
  }
}
