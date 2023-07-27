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
import { RouterModule } from '@angular/router';
//import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule ],

  declarations: [
    //SearchComponent,
    PaginationComponent  ],

  exports: [
    //SearchComponent,
    PaginationComponent
  ],

})
export class ComponentsModule {}
