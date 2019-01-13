import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginPageModule} from './login/login.module';

import {GeopositionService} from './map/service/geoposition.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {GoogleMaps} from '@ionic-native/google-maps/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {AuthModule} from '../lib/auth/auth.module';
import {ApiModule} from '../client';
import { PropsyHttpInterceptor } from '../lib/propsy-http-interceptor';
import {TranslateModule} from './translator/translate.module';
import {TranslationService} from './translator/translation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LoginPageModule,
    TranslateModule.forRoot(),
    AuthModule,
    ApiModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    GeopositionService,
    { provide: HTTP_INTERCEPTORS, useClass: PropsyHttpInterceptor, multi: true },
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    TranslationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
