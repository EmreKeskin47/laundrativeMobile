import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';
import { CreateOrderPageRoutingModule } from './create-order-routing.module';
import { CreateOrderPage } from './create-order.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOrderPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule,
  ],
  declarations: [CreateOrderPage],
})
export class CreateOrderPageModule {}
