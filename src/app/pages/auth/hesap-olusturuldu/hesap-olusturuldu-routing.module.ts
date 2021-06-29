import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HesapOlusturulduPage } from './hesap-olusturuldu.page';

const routes: Routes = [
  {
    path: '',
    component: HesapOlusturulduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HesapOlusturulduPageRoutingModule {}
