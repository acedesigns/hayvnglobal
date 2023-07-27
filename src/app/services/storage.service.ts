/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  public removeData(key: string) {
    return localStorage.removeItem(key);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }

  public saveData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

}

