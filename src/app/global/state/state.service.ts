import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  device_width:number = (window.innerWidth > 0) ? window.innerWidth : screen.width;
}
