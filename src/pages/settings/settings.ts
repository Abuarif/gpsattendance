import { Component } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Login } from '../login/login';
import { HomePage } from '../home/home';
import { DataApi } from '../../providers/data-api';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {
  private serverPath: string = 'https://mtas.prasarana.com.my';
  private token: string = ''; 
  private email: string = 'suhaimi.maidin@prasarana.com.my';
  private user_id: string = '';
  private debug: boolean = false;
  private activate: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataApi: DataApi, private nav: Nav) {
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave Settings');
    this.dataApi.update('serverPath', this.serverPath);
    this.dataApi.update('token', this.token);
    this.dataApi.update('debug', this.debug);
    this.dataApi.update('activate', this.activate);
  }

  public debugDefault() {
    if (this.debug) {
      this.token = '10010060';
      this.dataApi.update('token', this.token);
      this.dataApi.update('email', this.email);
      this.user_id = '24';
      this.dataApi.update('user_id', this.user_id);
    }
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter Settings');
    if (this.serverPath == '') {
      this.serverPath = this.dataApi.get('serverPath');
    }
    this.user_id = this.dataApi.get('user_id');
    this.token = this.dataApi.get('token');
    this.activate = (this.dataApi.get('activate') == 'true');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: 'Please specify your host server in Settings!',
      buttons: ['OK']
    });
    alert.present();
  }

  logout() {
    this.dataApi.flush();
    this.nav.popToRoot(HomePage);
  }

  login() {
    if (this.activate) {
      this.navCtrl.push(Login, {serverPath: this.serverPath});
    }
  }
}
