import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Product} from '../../core/models/product';
import {ProductsService} from '../../core/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  $state: Subscription;
  product: Product;
  amount: number;
  quantity: number;

  constructor(private route: ActivatedRoute,
              private productSvc: ProductsService) {
  }

  async ngOnInit() {
    if (!this.productSvc.isProduct()) {
      await this.productSvc.fetchData();
    }
    this.$state = this.route.params.subscribe(params => {
      this.product = this.productSvc.getById(+params.sku);
    });
  }

  handleAmount(value: number) {
    this.quantity = value / this.product.price;
  }

  handleQuantity(value: number) {
    this.amount = value * this.product.price;
  }

  ionViewWillLeave(): void {
    this.$state.unsubscribe();
  }

}
