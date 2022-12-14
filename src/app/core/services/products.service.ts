import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../models/product';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly STORAGE_KEY: string = 'SEARCH_VALUE';
  private all: Array<Product> = [];
  private productPool: Array<Product> = [];

  private subjAll: BehaviorSubject<Array<Product>> = new BehaviorSubject<Array<Product>>([]);
  private search: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private storage: StorageService) {
  }

  async init() {
    await this.storage.init();
    const isStoredSearchValue = await this.storage.isStored(this.STORAGE_KEY);
    if (isStoredSearchValue) {
      const search = await this.storage.load(this.STORAGE_KEY);
      this.search.next(search);
    }
    await this.fetchData();
  }

  async fetchData() {
    const a = await fetch('./assets/mocks/data.json');
    this.all = await a.json();
    this.productPool = this.all;
    this.emitValues();
  }

  allObs(): Observable<Array<Product>> {
    return this.subjAll.asObservable();
  }

  searchObs(): Observable<string> {
    return this.search.asObservable();
  }

  isProduct(): boolean {
    return !!(this.productPool.length);
  }

  async filterByName(value: string) {
    await this.storage.save(this.STORAGE_KEY, value);
    this.all = this.productPool.filter(subj => subj.name.toLowerCase().includes(value.toLowerCase()));
    this.emitValues();
  }

  getById(productSku: number): Product | undefined {
    return this.productPool.find(product => product.sku === productSku);
  }

  private emitValues() {
    this.subjAll.next(this.all);
  }
}
