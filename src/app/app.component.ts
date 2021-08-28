import { FeedbackAlertService } from './services/feedback-alert.service';
import { AuthService } from './services/auth.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private authService: AuthService,
    private alertSrv: FeedbackAlertService,
    @Inject('VERSION') private version: string
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.checkRegister();
    });
  }
  async checkRegister() {
    const version = await this.authService.getVersion().toPromise();
    if (version.result === 'ok') {
      if (this.versionCompare(this.version, version.version) > 0) {
        this.alertSrv.errorAlert(
          'Uygulamanın yeni versiyonu bulunmakatadır. Lütfen güncelleyiniz'
        );
      }
    }
    this.splashScreen.hide();
  }

  versionCompare(programVersion: string, controlVersion: string): number {
    let pa: string[] = programVersion.split('.');
    let ca: string[] = controlVersion.split('.');
    for (let i = 0; i < pa.length; i++) {
      let n1 = +pa[i];
      if (i >= ca.length) return 1;
      let n2 = +ca[i];
      if (n1 > n2) return 1;
      if (n1 < n2) return -1;
    }
    if (ca.length > pa.length) return -1;
    return 0;
  }
}
