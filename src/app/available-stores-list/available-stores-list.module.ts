import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableStoresListPageRoutingModule } from './available-stores-list-routing.module';

import { AvailableStoresListPage } from './available-stores-list.page';
import { StoreCardComponent } from './../components/store-card/store-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableStoresListPageRoutingModule,
  ],
  declarations: [AvailableStoresListPage, StoreCardComponent],
})
export class AvailableStoresListPageModule {}
