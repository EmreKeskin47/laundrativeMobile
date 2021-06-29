import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazaSecimPage } from './magaza-secim.page';

const routes: Routes = [
  {
    path: '',
    component: MagazaSecimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagazaSecimPageRoutingModule {}
