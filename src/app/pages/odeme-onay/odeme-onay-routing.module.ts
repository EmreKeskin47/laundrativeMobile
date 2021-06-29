import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdemeOnayPage } from './odeme-onay.page';

const routes: Routes = [
  {
    path: '',
    component: OdemeOnayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdemeOnayPageRoutingModule {}
