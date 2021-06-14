import { Component, OnInit } from '@angular/core';
import { StateService } from '../../global/state/state.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  device_width:any;
  constructor( private state: StateService) { }

  ngOnInit(): void {
    this.device_width = this.state.device_width;
  }

}
