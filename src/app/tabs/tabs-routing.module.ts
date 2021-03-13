import { CreateOrderPage } from '../pages/create-order/create-order.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'card',
        loadChildren: () =>
          import('../pages/card/card.module').then((m) => m.CardPageModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../pages/orders/orders.module').then(
            (m) => m.OrdersPageModule
          ),
      },
      {
        path: 'create-order',
        loadChildren: () =>
          import('../pages/create-order/create-order.module').then(
            (m) => m.CreateOrderPageModule
          ),
      },
      {
        path: 'create-order/available-stores-list',
        loadChildren: () =>
          import(
            '../pages/available-stores-list/available-stores-list.module'
          ).then((m) => m.AvailableStoresListPageModule),
      },
      {
        path: 'create-order/store-menu',
        loadChildren: () =>
          import('../pages/store-menu/store-menu.module').then(
            (m) => m.StoreMenuPageModule
          ),
      },
      {
        path: 'help',
        loadChildren: () =>
          import('../pages/help/help.module').then((m) => m.HelpPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/create-order',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/create-order',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
