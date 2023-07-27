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
import { SearchResultComponent } from './search-result.component';
import { SearchResultRoutingModule } from './search-result-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProjectModule} from "../../shared/project.module";

@NgModule({
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectModule
  ]
})
export class SearchResultModule { }
