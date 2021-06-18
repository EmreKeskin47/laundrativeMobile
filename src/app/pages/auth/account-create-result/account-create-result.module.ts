import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountCreateResultPageRoutingModule } from './account-create-result-routing.module';

import { AccountCreateResultPage } from './account-create-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountCreateResultPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AccountCreateResultPage],
})
export class AccountCreateResultPageModule {}
