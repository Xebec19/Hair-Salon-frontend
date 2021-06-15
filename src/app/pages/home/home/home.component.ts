import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../global/state/state.service';
import { ProductsService } from '../../../global/products/products.service';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  device_width: any;
  hairStyles: any[] = [];
  constructor(private state: StateService,
    protected productsService: ProductsService,
    public carouselOne: NgxCarousel) { }

  ngOnInit(): void {
    this.device_width = this.state.device_width;
    this.hairStyles = this.productsService.haircutsMenu;
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

}
