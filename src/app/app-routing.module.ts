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
      import('./pages/create-order/create-order.module').then(
        (m) => m.CreateOrderPageModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./pages/card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/help/help.module').then((m) => m.HelpPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/user-profile/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then(
        (m) => m.HomepagePageModule
      ),
  },
  {
    path: 'available-stores-list',
    loadChildren: () =>
      import('./pages/available-stores-list/available-stores-list.module').then(
        (m) => m.AvailableStoresListPageModule
      ),
  },
  {
    path: 'store-menu',
    loadChildren: () =>
      import('./pages/store-menu/store-menu.module').then(
        (m) => m.StoreMenuPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/signin/signin.module').then((m) => m.SigninPageModule),
  },
  {
    path: 'account-create-result',
    loadChildren: () =>
      import('./pages/account-create-result/account-create-result.module').then(
        (m) => m.AccountCreateResultPageModule
      ),
  },
  {
    path: 'add-address-result',
    loadChildren: () =>
      import(
        './pages/user-profile/add-address-result/add-address-result.module'
      ).then((m) => m.AddAddressResultPageModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./pages/payment/payment.module').then((m) => m.PaymentPageModule),
  },
  {
    path: 'payment-success',
    loadChildren: () =>
      import('./pages/payment-success/payment-success.module').then(
        (m) => m.PaymentSuccessPageModule
      ),
  },
  {
    path: 'detailed-search',
    loadChildren: () =>
      import('./pages/detailed-search/detailed-search.module').then(
        (m) => m.DetailedSearchPageModule
      ),
  },
  {
    path: 'account-info',
    loadChildren: () =>
      import('./pages/user-profile/account-info/account-info.module').then(
        (m) => m.AccountInfoPageModule
      ),
  },

  {
    path: 'delete-account',
    loadChildren: () =>
      import('./pages/user-profile/delete-account/delete-account.module').then(
        (m) => m.DeleteAccountPageModule
      ),
  },
  {
    path: 'address-list',
    loadChildren: () =>
      import('./pages/user-profile/address-list/address-list.module').then(
        (m) => m.AddressListPageModule
      ),
  },
  {
    path: 'notification-settings',
    loadChildren: () =>
      import(
        './pages/user-profile/notification-settings/notification-settings.module'
      ).then((m) => m.NotificationSettingsPageModule),
  },
  {
    path: 'discount-list',
    loadChildren: () =>
      import('./pages/user-profile/discount-list/discount-list.module').then(
        (m) => m.DiscountListPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/user-profile/contact/contact.module').then(
        (m) => m.ContactPageModule
      ),
  },
  {
    path: 'create-address',
    loadChildren: () =>
      import('./pages/user-profile/create-address/create-address.module').then(
        (m) => m.CreateAddressPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
