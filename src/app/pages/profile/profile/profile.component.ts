import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  device_width: any;
  constructor() { }

  ngOnInit(): void {
    this.device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  }

}
