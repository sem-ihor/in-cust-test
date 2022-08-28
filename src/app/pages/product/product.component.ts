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

  constructor(private route: ActivatedRoute,
              private productSvc: ProductsService) {
  }

  ngOnInit() {
    this.$state = this.route.params.subscribe(params => {
      this.product = this.productSvc.getById(+params.sku);
    });
  }

  ionViewWillLeave(): void {
    this.$state.unsubscribe();
  }

}
