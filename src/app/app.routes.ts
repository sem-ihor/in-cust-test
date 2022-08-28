import {Route} from '@angular/router';
import {AllProductComponent} from './pages/all-product/all-product.component';
import {ProductComponent} from './pages/product/product.component';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AppRoutes: Array<Route> = [
  {
    path: '',
    component: AllProductComponent
  },
  {
    path: 'product/:sku',
    component: ProductComponent
  },
];
