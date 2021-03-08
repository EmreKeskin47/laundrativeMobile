import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

//For exporting components to all pages
@NgModule({
  imports: [IonicModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
