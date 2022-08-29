import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../core/services/products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit, OnDestroy {

  search = '';
  search$: Subscription;

  constructor(private productSvc: ProductsService) {
  }

  async ngOnInit() {
    await this.productSvc.init();
    this.search$ = this.productSvc.searchObs().subscribe(value => this.search = value);
  }

  async handleChange(value: string) {
    await this.productSvc.filterByName(value);
  }

  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }
}
