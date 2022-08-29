import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllProductComponent} from './all-product/all-product.component';
import {IonicModule} from '@ionic/angular';
import {ProductComponent} from './product/product.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AllProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AllProductComponent,
    ProductComponent
  ]
})
export class PagesModule { }
