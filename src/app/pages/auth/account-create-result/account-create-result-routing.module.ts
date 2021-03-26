import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountCreateResultPage } from './account-create-result.page';

const routes: Routes = [
  {
    path: '',
    component: AccountCreateResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountCreateResultPageRoutingModule {}
