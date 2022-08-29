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

  doRefresh(event: any) {
    setTimeout(async () => {
      this.search = '';
      event.target.complete();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }
}
