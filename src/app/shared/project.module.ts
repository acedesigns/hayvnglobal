/* =======================================================
 *
 * Created by anele on 26/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ThousandSuffixesPipe } from "../pipes/number";

@NgModule({
  declarations: [
    ThousandSuffixesPipe,
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [ThousandSuffixesPipe, FormsModule]
})
export class ProjectModule { }
