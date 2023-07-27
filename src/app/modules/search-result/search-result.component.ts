/* =======================================================
 *
 * Created by anele on 26/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http-service.service";
import {Vehicles} from "../../interfaces/vehicles";
import Swal from "sweetalert2";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit {

  searchResults: any;
  pagination: any;
  isData = true;

  constructor(private activatedRoute: ActivatedRoute,
              private cart: CartService,
              private service: HttpService,) {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        this.getSearchResult(params);
      },
    });
  }


  ngOnInit(): void {}


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


  getSearchResult(search: any) {

    let myObj = {
      searchTerm: search.searchTerm,
      resource: search.resource
    };

    this.service.postData('search/',myObj )
      .subscribe({
          next: (data: any) => {
            this.searchResults = this.groupArray(data.results, 3);
            this.isData = false;
            this.pagination = data;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {}

        }
      )
  }


  addToCart(item: Vehicles) {
    this.cart.addToCart(item);
    Swal.fire('Thank you...', 'Item added successfully!', 'success');
  }

}
