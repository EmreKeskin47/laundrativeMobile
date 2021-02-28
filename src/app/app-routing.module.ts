import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  {
    path: 'create-order',
    loadChildren: () =>
      import('./create-order/create-order.module').then(
        (m) => m.CreateOrderPageModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/help.module').then((m) => m.HelpPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
