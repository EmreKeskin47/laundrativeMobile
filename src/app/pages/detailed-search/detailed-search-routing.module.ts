import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedSearchPage } from './detailed-search.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedSearchPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule, ComponentsModule],
})
export class DetailedSearchPageRoutingModule {}
