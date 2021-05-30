import { IonicSelectableModule } from 'ionic-selectable';
import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StoreMenuPageRoutingModule } from './store-menu-routing.module';

import { StoreMenuPage } from './store-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreMenuPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
    ComponentsModule,
  ],
  declarations: [StoreMenuPage],
})
export class StoreMenuPageModule {}
