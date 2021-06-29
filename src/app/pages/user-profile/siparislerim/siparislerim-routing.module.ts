import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiparislerimPage } from './siparislerim.page';

const routes: Routes = [
  {
    path: '',
    component: SiparislerimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiparislerimPageRoutingModule {}
