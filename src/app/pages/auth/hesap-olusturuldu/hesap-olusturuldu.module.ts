import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HesapOlusturulduPageRoutingModule } from './hesap-olusturuldu-routing.module';

import { HesapOlusturulduPage } from './hesap-olusturuldu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HesapOlusturulduPageRoutingModule
  ],
  declarations: [HesapOlusturulduPage]
})
export class HesapOlusturulduPageModule {}
