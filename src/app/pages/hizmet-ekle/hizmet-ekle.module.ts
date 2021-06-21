import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HizmetEklePageRoutingModule } from './hizmet-ekle-routing.module';

import { HizmetEklePage } from './hizmet-ekle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HizmetEklePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HizmetEklePage],
})
export class HizmetEklePageModule {}
