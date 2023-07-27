/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import axios from 'axios';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap  } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  appConfig = {
    apiUrl      : 'http://localhost:4200/api/',
    //apiUrl      : 'https://sunny-haupia-487493.netlify.app/api/',
    headers     : new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-Requested-With' 	: 'XMLHttpRequest',
      'Access-Control-Allow-Origin'	: '*',
      'Access-Control-Allow-Headers'	: '*',
    })
  };

  constructor(private http: HttpClient) {}

  private catchError( error: HttpErrorResponse | any ) {
    return throwError( error   || "Server Error")
  }

  private extractData (resp : HttpResponse<any>) {
    return resp;
  }

  postData(verb: string, data: any ): Observable<any> {
    return this.http.post( this.appConfig.apiUrl + verb, data, {headers : this.appConfig.headers});
  }

  getData(verb: string ): Observable<any> {
    return this.http.get(this.appConfig.apiUrl + verb , {headers : this.appConfig.headers})
      .pipe(
        catchError(err => {
          return this.catchError(err);
        }),
        map(
          (response: any) => {
            return this.extractData(response);
          }
        )
      );
  }

}
