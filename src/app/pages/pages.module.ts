import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllProductComponent} from './all-product/all-product.component';
import {IonicModule} from '@ionic/angular';
import {ProductComponent} from './product/product.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AllProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    AllProductComponent,
    ProductComponent
  ]
})
export class PagesModule { }
