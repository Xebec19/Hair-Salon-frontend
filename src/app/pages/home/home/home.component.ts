import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  device_width:any;
  constructor() { }

  ngOnInit(): void {
    this.device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  }

}
