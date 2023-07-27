/* =======================================================
 *
 * Created by anele on 26/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() {}
  @Input() pagination: any;

  @Input() currentPage: number | undefined;
  @Input() totalPages: number | undefined;

  ngOnInit(): void {
    //console.log(this.pagination);
    //this.totalPages = this.pagination
  }

  searchParams (url: string) {
    const urlParams = new URLSearchParams(window.location.search);
  }

  onPageChange(page: number): void {
    console.log(`Page changed to ${page}`);
  }

  nextPage(url: any) {
    console.log('nextPage Clicked');
    console.log(url.next);
    console.log(url.next.substring(url.next.length - 6))
  }

  prevPage() {
    console.log('prev page Clicked');
  }

}
