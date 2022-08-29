import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Product} from '../../core/models/product';
import {ProductsService} from '../../core/services/products.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  readonly menuId: string = 'mainMenu';
  $state: Subscription;
  product: Product;
  amount: number;
  quantity: number;

  constructor(private route: ActivatedRoute,
              private productSvc: ProductsService,
              private menuCtrl: MenuController) {
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
    this.summarizeAmount(value);
  }

  handleInputAmount(event: CustomEvent) {
    this.summarizeAmount(+event.detail.data);
  }

  handleQuantity(value: number) {
    this.summarizeQuantity(value);
  }

  handleInputQuantity(event: CustomEvent) {
    this.summarizeQuantity(+event.detail.data);
  }

  summarizeAmount(value: number) {
    this.amount = value;
    this.quantity = +(this.amount / this.product.price).toFixed(3);
  }

  summarizeQuantity(value: number) {
    this.quantity = value;
    this.amount = +(this.quantity * this.product.price).toFixed(3);
  }

  async enableSidebar() {
    await this.menuCtrl.open(this.menuId);
  }

  ionViewWillLeave(): void {
    this.$state.unsubscribe();
  }

}
