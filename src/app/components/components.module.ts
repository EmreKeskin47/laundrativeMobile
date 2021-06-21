import { KategoriIsmiPipe } from './../pipes/kategori-ismi.pipe';
import { StoreInfoCardComponent } from './store-info-card/store-info-card.component';
import { FormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
import { CityDistrictPickerComponent } from './city-district-picker/city-district-picker.component';
import { FiyatPipe } from './../pipes/fiyat.pipe';
import { AddressCardComponent } from './address-card/address-card.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { AdressFieldComponent } from './adress-field/adress-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
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
    DateFieldComponent,
    AdressFieldComponent,
    OrderCardComponent,
    AddressCardComponent,
    FiyatPipe,
    CityDistrictPickerComponent,
    StoreInfoCardComponent,
    KategoriIsmiPipe,
  ],
  exports: [
    HeaderComponent,
    StoreCardComponent,
    CardItemComponent,
    DateFieldComponent,
    AdressFieldComponent,
    OrderCardComponent,
    AddressCardComponent,
    FiyatPipe,
    CityDistrictPickerComponent,
    StoreInfoCardComponent,
    KategoriIsmiPipe,
  ],
})
export class ComponentsModule {}
