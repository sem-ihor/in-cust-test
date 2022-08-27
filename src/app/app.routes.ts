import {Route} from '@angular/router';
import {AllProductComponent} from './pages/all-product/all-product.component';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AppRoutes: Array<Route> = [
  {
    path: '',
    component: AllProductComponent
  }
];
