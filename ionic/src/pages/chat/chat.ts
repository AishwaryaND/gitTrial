import { Component, Renderer, NgZone } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import WatsonChat from '../../componentScripts/chat';
import { Platform } from 'ionic-angular';
import { ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public dataStore: DataStore,
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    public platform: Platform,
    public elem: ElementRef
  ) {
    this.watsonChat.init(
      this.url,
      this.iam_apikey,
      this.workspaceId,
      eval('this.shouldSendWatsonAssistantAnalytics')
    );
    platform.ready().then(() => {
      this.message();
    });
  }

  messages = [];
  input: any;
  watsonChat = new WatsonChat();
  pageTagName: any;
  username = (this.dataStore as any).username || 'USER';

  message() {
    this.watsonChat.sendMessage(this.messages, this.input, (err, msgs) => {
      this.zone.run(() => {
        this.messages = msgs;
        this.input = '';
      });
    });
    this.cdr.detectChanges();
  }

  ionViewDidLoad() {
    this.pageTagName = this.elem.nativeElement.tagName.toLowerCase();
    const scrollContentSelector = this.pageTagName + ' .scroll-content';
    const scrollElement: HTMLElement = document.querySelector(
      scrollContentSelector
    ) as HTMLElement;
    scrollElement.style.overflow = 'hidden';
    WL.Analytics.log(
      {
        fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name,
        toPage: this.navCtrl.getActive().name
      },
      'PageTransition '
    );
    WL.Analytics.send();
    WL.Analytics.log(
      {
        fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name,
        toPage: this.navCtrl.getActive().name
      },
      'PageTransition '
    );
  }

  // provide the url, iam api key and workspace id
  url =
    'https://api.us-south.assistant.watson.cloud.ibm.com/instances/3af016a1-b06f-466f-8d0c-a62799fc1677';
  iam_apikey = 'zvQYoPGcTR9nHBstnh95ukVwKUONgf18oun9LfVBVIcW';
  workspaceId = '0f4b021b-e335-40a4-84b1-0679170c0c52';
  shouldSendWatsonAssistantAnalytics = true;
}
