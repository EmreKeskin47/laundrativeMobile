import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YeniSiparisPageRoutingModule } from './yeni-siparis-routing.module';

import { YeniSiparisPage } from './yeni-siparis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YeniSiparisPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [YeniSiparisPage],
})
export class YeniSiparisPageModule {}
