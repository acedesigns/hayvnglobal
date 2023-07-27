/* =======================================================
 *
 * Created by anele on 26/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { ProjectModule } from "../../../shared/project.module";
import { StarshipsRoutingModule } from './starships-routing.module';
import { ComponentsModule } from "../../../components/components.module";


@NgModule({
  declarations: [
    StarshipsComponent,
  ],
  imports: [
    CommonModule,
    ProjectModule,
    ComponentsModule,
    StarshipsRoutingModule,
  ]
})
export class StarshipsModule { }
