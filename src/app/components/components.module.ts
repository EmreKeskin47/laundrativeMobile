import { FormsModule } from '@angular/forms';
import {
  IonicSelectableComponent,
  IonicSelectableModule,
} from 'ionic-selectable';
import { CityDistrictPickerComponent } from './city-district-picker/city-district-picker.component';
import { FiyatPipe } from './../pipes/fiyat.pipe';
import { TypesComponent } from './types/types.component';
import { DiscountComponent } from './discount/discount.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { AdressFieldComponent } from './adress-field/adress-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { CardItemComponent } from './card-item/card-item.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

//For exporting components to all pages
@NgModule({
  imports: [IonicModule, CommonModule, IonicSelectableModule, FormsModule],
  declarations: [
    HeaderComponent,
    StoreCardComponent,
    CardItemComponent,
    StoreItemComponent,
    DateFieldComponent,
    AdressFieldComponent,
    OrderCardComponent,
    AddressCardComponent,
    DiscountComponent,
    TypesComponent,
    FiyatPipe,
    CityDistrictPickerComponent,
  ],
  exports: [
    HeaderComponent,
    StoreCardComponent,
    CardItemComponent,
    StoreItemComponent,
    DateFieldComponent,
    AdressFieldComponent,
    OrderCardComponent,
    AddressCardComponent,
    DiscountComponent,
    TypesComponent,
    FiyatPipe,
    CityDistrictPickerComponent,
  ],
})
export class ComponentsModule {}
