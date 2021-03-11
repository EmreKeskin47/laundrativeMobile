import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../card/card.module').then((m) => m.CardPageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../orders/orders.module').then((m) => m.OrdersPageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../create-order/create-order.module').then(
            (m) => m.CreateOrderPageModule
          ),
      },
      {
        path: 'tab4',
        loadChildren: () =>
          import('../help/help.module').then((m) => m.HelpPageModule),
      },
      {
        path: 'tab5',
        loadChildren: () =>
          //import('../profile/profile.module').then((m) => m.ProfilePageModule),
          import('../store-menu/store-menu.module').then(
            (m) => m.StoreMenuPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
