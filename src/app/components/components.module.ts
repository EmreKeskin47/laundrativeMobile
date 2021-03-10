import { CardItemComponent } from './card-item/card-item.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

//For exporting components to all pages
@NgModule({
  imports: [IonicModule],
  declarations: [HeaderComponent, StoreCardComponent, CardItemComponent],
  exports: [HeaderComponent, StoreCardComponent, CardItemComponent],
})
export class ComponentsModule {}
