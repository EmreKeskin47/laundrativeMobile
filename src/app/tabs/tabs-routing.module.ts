import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'odeme-onay',
        loadChildren: () =>
          import('../pages/odeme-onay/odeme-onay.module').then(
            (m) => m.OdemeOnayPageModule
          ),
      },
      {
        path: 'hesap-olusturuldu',
        loadChildren: () =>
          import(
            '../pages/auth/hesap-olusturuldu/hesap-olusturuldu.module'
          ).then((m) => m.HesapOlusturulduPageModule),
      },
      {
        path: 'yeni-siparis',
        loadChildren: () =>
          import('../pages/yeni-siparis/yeni-siparis.module').then(
            (m) => m.YeniSiparisPageModule
          ),
      },
      {
        path: 'yeni-siparis/hizmet-ekle',
        loadChildren: () =>
          import('../pages/hizmet-ekle/hizmet-ekle.module').then(
            (m) => m.HizmetEklePageModule
          ),
      },
      {
        path: 'yeni-siparis/magaza-secim',
        loadChildren: () =>
          import('../pages/magaza-secim/magaza-secim.module').then(
            (m) => m.MagazaSecimPageModule
          ),
      },
      {
        path: 'yeni-siparis/sepet',
        loadChildren: () =>
          import('../pages/sepet/sepet.module').then((m) => m.SepetPageModule),
      },
      {
        path: 'sepet',
        loadChildren: () =>
          import('../pages/sepet/sepet.module').then((m) => m.SepetPageModule),
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
        path: 'profile/siparislerim',
        loadChildren: () =>
          import('../pages/user-profile/siparislerim/siparislerim.module').then(
            (m) => m.SiparislerimPageModule
          ),
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
