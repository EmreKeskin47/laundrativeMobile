import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAddressResultPage } from './add-address-result.page';

const routes: Routes = [
  {
    path: '',
    component: AddAddressResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAddressResultPageRoutingModule {}
