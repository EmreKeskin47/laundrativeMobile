import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAddressResultPageRoutingModule } from './add-address-result-routing.module';

import { AddAddressResultPage } from './add-address-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAddressResultPageRoutingModule
  ],
  declarations: [AddAddressResultPage]
})
export class AddAddressResultPageModule {}
