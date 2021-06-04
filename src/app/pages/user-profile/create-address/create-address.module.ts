import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateAddressPageRoutingModule } from './create-address-routing.module';
import { CreateAddressPage } from './create-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAddressPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CreateAddressPage],
})
export class CreateAddressPageModule {}
