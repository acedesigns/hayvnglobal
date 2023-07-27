/* =======================================================
 *
 * Created by anele on 26/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import Swal from "sweetalert2";
import { Vehicles } from "../../../interfaces/vehicles";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from "../../../services/cart.service";
import { HttpService } from "../../../services/http-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit, OnDestroy {

  starships: any;
  pagination: any;
  isData = true;
  // vehicles: Vehicles

  constructor( private service: HttpService, private cart: CartService, private router: Router, ) { }

  currentPage = 1;
  totalPages = 0;

  searchModel: string = '';

  ngOnInit(): void {
    this.service.getData('starships')
      .subscribe({
        next: (data: any) => {
          this.starships = this.groupArray(data.results, 3);
          this.pagination = data;
          this.isData = false;
        },
        error: (err: Error) => {
          console.log(err);
        },
        complete: () => {

        }
      })
  }


  ngOnDestroy(): void {}


  groupArray<T>(data: Array<T>, n: number): Array<T[]> {
    let group = new Array<T[]>();

    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0)
        j++;
      group[j] = group[j] || [];
      group[j].push(data[i])
    }
    return group;
  }


  addToCart(item: Vehicles) {
    this.cart.addToCart(item);
    Swal.fire('Thank you...', 'Item added successfully!', 'success');
  }

  doSearch(term: string, resource: string) {
    if (term == null || term == '') { return }
    this.router.navigate(['search-result/', term, resource], {}).then();
  }

}
