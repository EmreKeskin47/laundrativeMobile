import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      //import('./tabs/tabs.module').then((m) => m.TabsPageModule),
      //import('./homepage/homepage.module').then((m) => m.HomepagePageModule),
      //import('./login/login.module').then((m) => m.LoginPageModule),
      import('./signin/signin.module').then((m) => m.SigninPageModule),
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
  {
    path: 'store-menu',
    loadChildren: () =>
      import('./store-menu/store-menu.module').then(
        (m) => m.StoreMenuPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SigninPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
  {
    path: 'homepage',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepagePageModule),
  },
  {
    path: 'available-stores-list',
    loadChildren: () =>
      import('./available-stores-list/available-stores-list.module').then(
        (m) => m.AvailableStoresListPageModule
      ),
  },
  */
