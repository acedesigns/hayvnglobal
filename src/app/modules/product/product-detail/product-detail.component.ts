/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import Swal from "sweetalert2";
import { ActivatedRoute } from '@angular/router';
import { Vehicles } from "../../../interfaces/vehicles";
import { CartService } from "../../../services/cart.service";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from "../../../services/http-service.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  vehicleId: number = 0;
  verb: string = '';
  vehicleDetail: any;
  isData = true;

  constructor( private activatedRoute: ActivatedRoute,
               private cart: CartService,
               private service: HttpService, ) {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        this.vehicleId = params.vehicleId;
        this.verb = params.verb;
      },
    });

  }

  ngOnInit(): void {

    this.service.getData(`${this.verb}/${this.vehicleId}`)
      .subscribe({
        next: (data: any) => {
          console.log(data)
          this.isData = false;
          this.vehicleDetail = data;
        },
        error: (err: Error) => {
          console.log(err);
        },
        complete: () => {}
      });
  }

  ngOnDestroy(): void {
  }

  addToCart(item: Vehicles) {
    this.cart.addToCart(item);
    Swal.fire('Thank you...', 'Item added successfully!', 'success');
  }

}
