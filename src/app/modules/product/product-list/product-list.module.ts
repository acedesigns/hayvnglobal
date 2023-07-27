/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModule } from "../../../shared/project.module";
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ComponentsModule } from "../../../components/components.module";



@NgModule({
  declarations: [
    ProductListComponent,
  ],

  imports: [
    CommonModule,
    ComponentsModule,
    ProductListRoutingModule,
    ProjectModule,

  ]
})
export class ProductListModule {
  constructor() {}

}
