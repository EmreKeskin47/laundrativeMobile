import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscountListPage } from './discount-list.page';

const routes: Routes = [
  {
    path: '',
    component: DiscountListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountListPageRoutingModule {}
