/* =======================================================
 *
 * Created by anele on 26/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Array<any> = [];
  cartTotal: number = 0;
  productCount: number = 1;
  constructor(private cartService: CartService) {
    this.items = this.cartService.getCartItems();
  }


  ngOnInit(): void {
    this.cartTotal = this.items.reduce((acc, item) => {
      return acc += item.cost_in_credits;
    }, 0);
  }

  remove(item: any) {
    this.cartService.items.splice(item,1);
    this.ngOnInit();
  }

  increaseQty(item: any) {
    this.productCount++;
    item.cost_in_credits = this.productCount * item.cost_in_credits;
    this.ngOnInit();
  }



}
