import { AddressDateFieldComponent } from './address-date-field/address-date-field.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { CardItemComponent } from './card-item/card-item.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

//For exporting components to all pages
@NgModule({
  imports: [IonicModule],
  declarations: [
    HeaderComponent,
    StoreCardComponent,
    CardItemComponent,
    StoreItemComponent,
    AddressDateFieldComponent,
  ],
  exports: [
    HeaderComponent,
    StoreCardComponent,
    CardItemComponent,
    StoreItemComponent,
    AddressDateFieldComponent,
  ],
})
export class ComponentsModule {}
