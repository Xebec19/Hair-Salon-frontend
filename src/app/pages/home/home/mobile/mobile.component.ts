import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent extends HomeComponent{}
