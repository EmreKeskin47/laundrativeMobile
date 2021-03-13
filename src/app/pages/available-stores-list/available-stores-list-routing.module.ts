import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableStoresListPage } from './available-stores-list.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableStoresListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableStoresListPageRoutingModule {}
