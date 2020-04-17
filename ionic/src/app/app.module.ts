import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DataStore } from './dataStore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from '../providers/live-update/live-update';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatPage } from "../pages/chat/chat";
import { Chat1Page } from "../pages/chat1/chat1";
import { Chat2Page } from "../pages/chat2/chat2";
import { Chat3Page } from "../pages/chat3/chat3";
import { Chat4Page } from "../pages/chat4/chat4";
import { Chat5Page } from "../pages/chat5/chat5";
import { Chat6Page } from "../pages/chat6/chat6";
import { Chat7Page } from "../pages/chat7/chat7";
import { Chat8Page } from "../pages/chat8/chat8";
import { Chat444Page } from "../pages/chat444/chat444";
import { VrecognitionPage } from "../pages/vrecognition/vrecognition";
import { VrPage } from "../pages/vr/vr";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ,ChatPage,Chat1Page,Chat2Page,Chat3Page,Chat4Page,Chat5Page,Chat6Page,Chat7Page,Chat8Page,Chat444Page,VrecognitionPage,VrPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ,ChatPage,Chat1Page,Chat2Page,Chat3Page,Chat4Page,Chat5Page,Chat6Page,Chat7Page,Chat8Page,Chat444Page,VrecognitionPage,VrPage],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LiveUpdateProvider
  ]
})
export class AppModule {}
