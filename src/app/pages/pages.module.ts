import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllProductComponent} from './all-product/all-product.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [
    AllProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AllProductComponent
  ]
})
export class PagesModule { }
