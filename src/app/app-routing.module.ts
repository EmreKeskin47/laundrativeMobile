import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
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
    path: 'profile',
    loadChildren: () =>
      import('./pages/user-profile/profile/profile.module').then(
        (m) => m.ProfilePageModule
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
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/auth/signin/signin.module').then(
        (m) => m.SigninPageModule
      ),
  },
  {
    path: 'account-create-result',
    loadChildren: () =>
      import(
        './pages/auth/account-create-result/account-create-result.module'
      ).then((m) => m.AccountCreateResultPageModule),
  },
  {
    path: 'add-address-result',
    loadChildren: () =>
      import(
        './pages/user-profile/add-address-result/add-address-result.module'
      ).then((m) => m.AddAddressResultPageModule),
  },

  {
    path: 'payment-success',
    loadChildren: () =>
      import('./pages/payment-success/payment-success.module').then(
        (m) => m.PaymentSuccessPageModule
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
  {
    path: 'yeni-siparis',
    loadChildren: () =>
      import('./pages/yeni-siparis/yeni-siparis.module').then(
        (m) => m.YeniSiparisPageModule
      ),
  },
  {
    path: 'hizmet-ekle',
    loadChildren: () =>
      import('./pages/hizmet-ekle/hizmet-ekle.module').then(
        (m) => m.HizmetEklePageModule
      ),
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./pages/splash/splash.module').then((m) => m.SplashPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
