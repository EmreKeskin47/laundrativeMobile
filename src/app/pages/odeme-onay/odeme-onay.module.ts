import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdemeOnayPageRoutingModule } from './odeme-onay-routing.module';

import { OdemeOnayPage } from './odeme-onay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdemeOnayPageRoutingModule
  ],
  declarations: [OdemeOnayPage]
})
export class OdemeOnayPageModule {}
