import { Component } from '@angular/core';
import { NavController,NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-invoice-details',
  templateUrl: 'invoice-details.html'
})
export class InvoiceDetails {
 
  constructor(public navCtrl: NavController,public param:NavParams) {
   
  }
  gotopaymentpage(){
    this.navCtrl.push('MakePayment')
  }

}
