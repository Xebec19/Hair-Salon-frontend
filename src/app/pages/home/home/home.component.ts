import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../global/state/state.service';
import { ProductsService } from '../../../global/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  device_width:any;
  products: any[] = [];
  constructor(private state: StateService,
    protected productsService: ProductsService) { }

  ngOnInit(): void {
    this.device_width = this.state.device_width;
    this.products = this.productsService.haircutsMenu;
  }

}
