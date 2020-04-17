import { Component, ViewChild, Renderer, ChangeDetectorRef, NgModule } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from "../providers/live-update/live-update";
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

@Component({
    templateUrl: 'app.html'
})

@NgModule({
    providers: [
        LiveUpdateProvider
    ]
})


export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private renderer: Renderer, private cdr: ChangeDetectorRef, private liveUpdateService: LiveUpdateProvider) {
        renderer.listenGlobal('document', 'mfpjsloaded', () => {
            this.initializeApp(renderer, cdr);
        });

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage }, { title: 'chat', component: ChatPage }, { title: 'chat1', component: Chat1Page }, { title: 'chat2', component: Chat2Page }, { title: 'chat3', component: Chat3Page }, { title: 'chat4', component: Chat4Page }, { title: 'chat5', component: Chat5Page }, { title: 'chat6', component: Chat6Page }, { title: 'chat7', component: Chat7Page }, { title: 'chat8', component: Chat8Page }, { title: 'chat444', component: Chat444Page }, { title: 'vrecognition', component: VrecognitionPage }, { title: 'vr', component: VrPage }
        ];
        renderer.listenGlobal('document', 'mfpjsloaded', () => { WL.Analytics.enable(); });
    }

    initializeApp(renderer, cdr) {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.rootPage = VrecognitionPage;
            cdr.detectChanges();
            this.statusBar.styleDefault();
            this.splashScreen.hide();

        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
aaa;