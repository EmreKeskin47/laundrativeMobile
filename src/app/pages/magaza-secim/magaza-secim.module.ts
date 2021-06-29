import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagazaSecimPageRoutingModule } from './magaza-secim-routing.module';

import { MagazaSecimPage } from './magaza-secim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagazaSecimPageRoutingModule
  ],
  declarations: [MagazaSecimPage]
})
export class MagazaSecimPageModule {}
