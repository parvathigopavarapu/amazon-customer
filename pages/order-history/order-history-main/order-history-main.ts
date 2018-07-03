import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-order-history-main',
    templateUrl: 'order-history-main.html'
})
export class OrderHistory {
    title = "Order History"
    list: any = [
        {
            order: 'All',
            icon: 'list-box',
            badge: 20,
            page: 'AllOrdersHistory'
        },

        {
            order: 'Parvathi',
            icon: 'list-box',
            relation: 'Myself',
            badge: 10,
            page: 'OrdersHistoryPerticular'
        },
        {
            order: 'Asha',
            icon: 'list-box',
            relation: 'Sister',
            badge: 5,
            page: 'OrdersHistoryPerticular'
        },
    ]


    constructor(public navCtrl: NavController) {

    }

    gotoPage(page, order) {
        this.navCtrl.push(page, { order })
    }
}
