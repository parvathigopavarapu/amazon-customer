import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
@IonicPage({
    segment: 'chat-history/chat-register',
    defaultHistory: ['chatHistory']
})
@Component({
    selector: 'page-chat-register',
    templateUrl: 'chat-register.html'
})
export class chatRegister {
    tabBarElement: any;
    title = 'Medi Serve'
    constructor(public navCtrl: NavController) {
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    goBack() {
        if (status == 'Open') {
            this.navCtrl.push('chatHistory')
        }
        else {
            this.navCtrl.push('chatHistory', { status: "end" })
        }
    }
    startChat() {
        this.navCtrl.push('chatCreate')
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
    }

    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }
}
