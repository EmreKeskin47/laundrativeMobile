import { AdressFieldComponent } from './adress-field/adress-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
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
    DateFieldComponent,
    AdressFieldComponent,
  ],
  exports: [
    HeaderComponent,
    StoreCardComponent,
    CardItemComponent,
    StoreItemComponent,
    DateFieldComponent,
    AdressFieldComponent,
  ],
})
export class ComponentsModule {}
