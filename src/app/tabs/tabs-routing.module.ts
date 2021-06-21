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
        path: 'card/payment/payment-success',
        loadChildren: () =>
          import('../pages/payment-success/payment-success.module').then(
            (m) => m.PaymentSuccessPageModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../pages/orders/orders.module').then(
            (m) => m.OrdersPageModule
          ),
      },
      {
        path: 'yeni-siparis',
        loadChildren: () =>
          import('../pages/yeni-siparis/yeni-siparis.module').then(
            (m) => m.YeniSiparisPageModule
          ),
      },
      {
        path: 'hizmet-ekle',
        loadChildren: () =>
          import('../pages/hizmet-ekle/hizmet-ekle.module').then(
            (m) => m.HizmetEklePageModule
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
        path: 'profile',
        loadChildren: () =>
          import('../pages/user-profile/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'profile/account-info',
        loadChildren: () =>
          import('../pages/user-profile/account-info/account-info.module').then(
            (m) => m.AccountInfoPageModule
          ),
      },
      {
        path: 'profile/delete-account',
        loadChildren: () =>
          import(
            '../pages/user-profile/delete-account/delete-account.module'
          ).then((m) => m.DeleteAccountPageModule),
      },
      {
        path: 'profile/address-list',
        loadChildren: () =>
          import('../pages/user-profile/address-list/address-list.module').then(
            (m) => m.AddressListPageModule
          ),
      },
      {
        path: 'profile/create-address',
        loadChildren: () =>
          import(
            '../pages/user-profile/create-address/create-address.module'
          ).then((m) => m.CreateAddressPageModule),
      },
      {
        path: 'profile/add-address-result',
        loadChildren: () =>
          import(
            '../pages/user-profile/add-address-result/add-address-result.module'
          ).then((m) => m.AddAddressResultPageModule),
      },
      {
        path: 'profile/contact',
        loadChildren: () =>
          import('../pages/user-profile/contact/contact.module').then(
            (m) => m.ContactPageModule
          ),
      },
      {
        path: 'profile/notification-settings',
        loadChildren: () =>
          import(
            '../pages/user-profile/notification-settings/notification-settings.module'
          ).then((m) => m.NotificationSettingsPageModule),
      },
      {
        path: '',
        redirectTo: '/yeni-siparis',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
