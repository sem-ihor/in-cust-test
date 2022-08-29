import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async isStored(key: string): Promise<boolean> {
    const KEY = `${key}`;
    return !!(await this._storage.get(KEY));
  }

  async load(key: string): Promise<any> {
    const KEY = `${key}`;
    return this._storage.get(KEY);
  }

  async save(key: string, value: any): Promise<any> {
    const KEY = `${key}`;
    return this._storage.set(KEY, value);
  }

  async reset(): Promise<void> {
    return this._storage.clear();
  }

  async remove(key: string): Promise<any> {
    const KEY = `${key}`;
    return this._storage.remove(KEY);
  }
}
