import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedSearchPageRoutingModule } from './detailed-search-routing.module';

import { DetailedSearchPage } from './detailed-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedSearchPageRoutingModule
  ],
  declarations: [DetailedSearchPage]
})
export class DetailedSearchPageModule {}
