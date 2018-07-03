import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'chat-history/chat-create',
    defaultHistory: ['chatHistory']
})
@Component({
    selector: 'page-chat-create',
    templateUrl: 'chat-create.html'
})
export class chatCreate {
    title = 'Create Chat'
    messages: any;
    newDate: any;
    time: Array<string>
    my_message: string;
    tabBarElement: any;
    constructor(public navCtrl: NavController) {
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.messages = [];
    }
    send(message) {
        this.newDate = new Date()
        this.messages.push({ my_message: message, currentDate: this.newDate })
        this.my_message = null;
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'none';
    }
}