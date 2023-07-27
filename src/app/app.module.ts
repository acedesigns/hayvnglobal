/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpInterceptorService} from "./interceptors/http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
