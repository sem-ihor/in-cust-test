import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../core/services/products.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {

  constructor(private productSvc: ProductsService) { }

  ngOnInit() {}

}
