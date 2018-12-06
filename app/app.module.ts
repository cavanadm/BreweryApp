import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BreweryService } from './brewery.service';
import{ HttpClientModule } from '@angular/common/http';
import { BreweryComponent } from './brewery/brewery.component';
import { BreweryEntryPage } from '../pages/breweryEntry/breweryentry';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BreweryComponent,
    BreweryEntryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BreweryEntryPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BreweryService
  ]
})
export class AppModule {}
