import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PediaPage } from '../pages/pedia/pedia';
import { PolitismosPage } from '../pages/politismos/politismos';
import { AnakinosisPage } from '../pages/anakinosis/anakinosis';
import { AthlitismosPage } from '../pages/athlitismos/athlitismos';
import { EpikerotitaPage } from '../pages/epikerotita/epikerotita';
import { NeoleaPage } from '../pages/neolea/neolea';
import { DetailsPage } from '../pages/details/details';
import { MesiPage } from '../pages/mesi/mesi';
import { DimotikiPage } from '../pages/dimotiki/dimotiki';
import { AnoteriPage } from '../pages/anoteri/anoteri';
import { VradinaPage } from '../pages/vradina/vradina';
import { HeaderComponent } from '../components/header/header';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PediaPage,
    PolitismosPage,
    AnakinosisPage,
    AthlitismosPage,
    EpikerotitaPage,
    NeoleaPage,
    DetailsPage,
    MesiPage,
    AnoteriPage,
    DimotikiPage,
    HeaderComponent,
    VradinaPage
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PediaPage,
    PolitismosPage,
    AnakinosisPage,
    AthlitismosPage,
    EpikerotitaPage,
    NeoleaPage,
    DetailsPage,
    MesiPage,
    AnoteriPage,
    DimotikiPage,
    VradinaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider

  ]
})
export class AppModule {}
