/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full'},

  {
    path: 'product-detail/:vehicleId/:verb',
    loadChildren: () => import('./modules/product/product-detail/product-detail.module')
      .then(m => m.ProductDetailModule)
  },

  { path: 'product-list',
    loadChildren: () => import('./modules/product/product-list/product-list.module')
      .then(m => m.ProductListModule) },

  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },

  { path: 'starships',
    loadChildren: () => import('./modules/product/starships/starships.module')
      .then(m => m.StarshipsModule)
  },
  { path: 'search-result/:searchTerm/:resource', loadChildren: () => import('./modules/search-result/search-result.module').then(m => m.SearchResultModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
