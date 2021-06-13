import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  device_width:any;
  constructor() { }

  ngOnInit(): void {
    this.device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  }

}
