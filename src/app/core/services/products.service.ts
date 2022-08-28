import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  all: Array<Product> = [];
  productPool: Array<Product> = [];

  private subjAll: BehaviorSubject<Array<Product>> = new BehaviorSubject<Array<Product>>([]);

  constructor() {
  }

  init() {
    fetch('./assets/mocks/data.json').then(res => res.json())
      .then((jsonData: Array<Product>) => {
        this.all = jsonData;
        this.productPool = jsonData;
        this.emitValues();
      });
  }

  allObs(): Observable<Array<Product>> {
    return this.subjAll.asObservable();
  }

  filterByName(value: string) {
    this.all = this.productPool.filter(subj => subj.name.toLowerCase().includes(value.toLowerCase()));
    this.emitValues();
  }

  getById(productSku: number): Product | undefined {
    return this.productPool.find(product => product.sku === productSku);
  }

  private emitValues() {
    // after search
    this.subjAll.next(this.all);
  }
}
