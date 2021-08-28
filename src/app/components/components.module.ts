import { SignupLoginFieldComponent } from './../components/signup-login-field/signup-login-field.component';
import { KategoriIsmiPipe } from './../pipes/kategori-ismi.pipe';
import { FormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
import { CityDistrictPickerComponent } from './city-district-picker/city-district-picker.component';
import { FiyatPipe } from './../pipes/fiyat.pipe';
import { AdressFieldComponent } from './adress-field/adress-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { CardItemComponent } from './card-item/card-item.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UzunIsimPipe } from '../pipes/uzun-isim.pipe';

//For exporting components to all pages
@NgModule({
  imports: [IonicModule, CommonModule, IonicSelectableModule, FormsModule],
  declarations: [
    CardItemComponent,
    DateFieldComponent,
    AdressFieldComponent,
    FiyatPipe,
    CityDistrictPickerComponent,
    KategoriIsmiPipe,
    UzunIsimPipe,
    SignupLoginFieldComponent,
  ],
  exports: [
    CardItemComponent,
    DateFieldComponent,
    AdressFieldComponent,
    FiyatPipe,
    CityDistrictPickerComponent,
    KategoriIsmiPipe,
    UzunIsimPipe,
    SignupLoginFieldComponent,
  ],
})
export class ComponentsModule {}
