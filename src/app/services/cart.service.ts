/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items: Array<any> = [];

  constructor( private localStorage: StorageService ) {}


  private containsObject(obj: any, list: any): boolean {
    if (!list.length) { return false; }

    if (obj == null) { return false; }

    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i].product_id === obj.product_id) {
        return true;
      }
    }
    return false;
  }


  getCartItems() {
    return this.items;
  }


  addToCart(product: any) {
    this.items.push(product);
  }

  removeFromCart(product: any) {}


}
