import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HizmetEklePage } from './hizmet-ekle.page';

const routes: Routes = [
  {
    path: '',
    component: HizmetEklePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HizmetEklePageRoutingModule {}
