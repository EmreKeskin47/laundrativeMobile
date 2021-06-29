import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiparislerimPageRoutingModule } from './siparislerim-routing.module';

import { SiparislerimPage } from './siparislerim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiparislerimPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SiparislerimPage],
})
export class SiparislerimPageModule {}
