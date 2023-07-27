/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import Swal from 'sweetalert2';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageService} from "../../../services/storage.service";
import { HttpService } from "../../../services/http-service.service";
import {Vehicles} from "../../../interfaces/vehicles";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";
declare var uikit: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  vehicles: any;
  pagination: any;
  isData = true;

  constructor( private service: HttpService, private router: Router,
               private cart: CartService) { }

  currentPage = 1;
  totalPages = 0;

  searchModel: string = '';


  ngOnInit(): void {
    this.service.getData('vehicles')
      .subscribe({
       next: (data: any) => {
         this.vehicles = this.groupArray(data.results, 3);
         this.pagination = data;
         this.totalPages = data.count
         this.isData = false;
       },
        error: (err: Error) => {
          console.log(err);
        },
        complete: () => {}
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
