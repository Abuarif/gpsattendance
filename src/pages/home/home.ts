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
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/icon/favicon.ico",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/icon/favicon.ico",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/icon/favicon.ico",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  getNews() {
    this.navCtrl.push(Announcement);
  }
}
