import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Announcement } from '../announcement/announcement';

import { DataApi } from '../../providers/data-api';
import { CheckDevice } from '../../providers/check-device';
import { Settings } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [
    {
      title: "Welcome to Mobile Time Attendance System",
      description: "The <b>mobile Time Attendance System (mTAS)</b> facilitates administrators to keep track our personnels according to our HCD policies.",
      image: "assets/image/prasarana.png",
    },
    {
      title: "Personal Profile",
      description: 
      "Name: " + this.dataApi.get('name') + "<br>" + 
      "Staff Number: " + this.dataApi.get('token'),
      image: "assets/image/prasarana.png",
    }
  ];

  constructor(public navCtrl: NavController, public dataApi: DataApi, public checkDevice: CheckDevice) {
    this.checkAuth();
  }

  ionViewOnLoad() {
    this.checkAuth();
  }

  getNews() {
    this.navCtrl.push(Announcement);
  }

  checkAuth() {
    console.log('checkAuth');
    if (!this.dataApi.get('token')) {
      this.navCtrl.push(Settings);
    }
  }
}
