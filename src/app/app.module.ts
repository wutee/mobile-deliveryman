import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginPageModule} from './login/login.module';


import {Geolocation} from '@ionic-native/geolocation/ngx';
import {GoogleMaps} from '@ionic-native/google-maps/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {AuthModule} from '../lib/auth/auth.module';
import {ApiModule} from '../client';
import { PropsyHttpInterceptor } from '../lib/propsy-http-interceptor';
import { MyOrdersComponent } from './my-orders/my-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    MyOrdersComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LoginPageModule,
    AuthModule,
    ApiModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    { provide: HTTP_INTERCEPTORS, useClass: PropsyHttpInterceptor, multi: true },
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
