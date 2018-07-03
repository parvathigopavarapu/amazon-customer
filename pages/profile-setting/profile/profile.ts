import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
@IonicPage({
    segment:'profile-setting',
   // defaultHistory:['accountManagement']
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
   list: any = [
        {
            order: 'Profile',
            icon: 'person',
            page: 'ProfileView'
        },
        
        {
            order: 'Manage Address',
            icon: 'home',
            page: 'ManageAddress'
        },
         {
            order: 'Manage Patients',
            icon: 'people',
            page: 'ManagePatient'
        },
    ]


  constructor(public navCtrl: NavController) {

  }
backToAccountPage(){
    this.navCtrl.setRoot('accountManagement')
}
}
