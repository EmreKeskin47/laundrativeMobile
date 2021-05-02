import { Plugins } from '@capacitor/core';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  //IOS(1), ANDROID(2), WEB(3);
  private _currentPlatform;
  _isletimSistemiBilgisi;

  constructor(private platform: Platform) {
    this.setCurrentPlatform();
    this.setOtherDeviceInfo();
  }
  get currentPlatform() {
    return this._currentPlatform;
  }

  private setCurrentPlatform() {
    if (this.platform.is('ios')) {
      this._currentPlatform = 1;
    } else if (this.platform.is('android')) {
      this._currentPlatform = 2;
    } else {
      this._currentPlatform = 3;
    }
  }

  async setOtherDeviceInfo() {
    const { Device } = Plugins;
    const deviceInfo = await Device.getInfo();
    const batteryInfo = await Device.getBatteryInfo();
    const lang = await Device.getLanguageCode();
    this._isletimSistemiBilgisi = {
      height: this.platform.height(),
      width: this.platform.width(),
      isPortrait: this.platform.isPortrait(),
      isLandscape: this.platform.isLandscape(),
      deviceInfo: deviceInfo,
      batteryInfo: batteryInfo,
      lang: lang,
    };

    return this._isletimSistemiBilgisi;
  }
}
