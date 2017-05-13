import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Announcement } from '../announcement/announcement';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [
    {
      title: "Welcome to mTAS!",
      description: "The <b>mobile Time Attendance System (mTAS)</b> facilitates administrators to keep track our personnels according to our HCD policies.",
      image: "assets/image/prasarana.png",
    },
    {
      title: "What NEWS?",
      description: "<b>WARNA</b> at your finger tips. <br><br>(future use only)",
      image: "assets/image/prasarana.png", 
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  getNews() {
    this.navCtrl.push(Announcement);
  }
}
