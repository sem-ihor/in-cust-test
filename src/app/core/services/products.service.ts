import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  all: Array<Product> = [];

  private subjAll: BehaviorSubject<Array<Product>> = new BehaviorSubject<Array<Product>>([]);

  constructor() {
    fetch('./assets/mocks/data.json').then(res => res.json())
      .then((jsonData: Array<Product>) => {
        this.all = jsonData;
        this.emitValues();
      });
  }

  init() {
    this.emitValues();
    // get data
  }

  allObs(): Observable<Array<Product>> {
    return this.subjAll.asObservable();
  }

  private emitValues() {
    // after search
    this.subjAll.next(this.all);
  }
}
