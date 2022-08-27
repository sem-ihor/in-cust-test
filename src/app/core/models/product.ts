import {Category} from './category';

export interface Product {
  sku: number;
  name: string;
  type: string;
  price: number;
  upc: string;
  category: Array<Category>;
  shipping: number;
  description: string;
  manufacturer: string;
  model: string;
  url: string;
  image: string;
}
