import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PediaPage } from '../pages/pedia/pedia';
import { PolitismosPage } from '../pages/politismos/politismos';
import { AthlitismosPage } from '../pages/athlitismos/athlitismos';
import { NeoleaPage } from '../pages/neolea/neolea';
import { AnakinosisPage } from '../pages/anakinosis/anakinosis';
import { EpikerotitaPage } from '../pages/epikerotita/epikerotita';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Παιδεία', component: PediaPage },
      { title: 'Πολιτισμός', component: PolitismosPage },
      { title: 'Αθλητισμός', component: AthlitismosPage },
      { title: 'Νεολαία', component: NeoleaPage },
      { title: 'Ανακοινώσεις', component: AnakinosisPage },
      { title: 'Επικαιρότητα', component: EpikerotitaPage }
    ];



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      if(this.platform.is('core') || this.platform.is('mobileweb')) {
           console.log("Platform is core or is mobile web");
              } else {
                   var notificationOpenedCallback = function(jsonData) {
                     console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                    };

            window["plugins"].OneSignal
              .startInit("050ee4a4-f939-42c5-bf34-f35e395d4afe", "683140671042")
              .handleNotificationOpened(notificationOpenedCallback)
              .endInit();
            }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
