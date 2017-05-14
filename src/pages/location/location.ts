import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';
import { DataApi } from '../../providers/data-api';
import { Api } from '../../providers/api';

import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class Location {
  lat: number;
  long: number;
  isCheckedIn:  boolean;
  data: any;

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker, public alertCtrl: AlertController, public dataApi: DataApi, public api: Api, public _loadingController: LoadingController) {
 
  }
  
  ionViewWillEnter() {
    this.isCheckedIn = (this.dataApi.get('isCheckedIn') == 'true');
  }
  start(){
    this.locationTracker.startTracking();
  }
 
  stop(){
    this.locationTracker.stopTracking();
  }

  private submitTags(direction: number) {
    let loading = this._loadingController.create({
      content: "Please wait...",
      duration: 3000
    });

    loading.present();

    //Submit Barcode
    this.api.submitTag(direction, this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.timestamp)
      .then((result) => {
        loading.dismiss();
        this.data = result;
        this.submitted();
      }, (err) => {
        loading.dismiss();
        // Display submit barcode error code
        alert(err);
      });
  }

  submitCheckInData() {
    let confirm = this.alertCtrl.create({
      title: 'Use this location?',
      message: 'Do you agree to use this location for your attendance?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked ');
            this.stop();
            this.submitTags(0);
          }
        }
      ]
    });
    confirm.present();

  }

  submitted() {
    let confirm = this.alertCtrl.create({
      title: 'Thank You',
      message: 'Your attendance is successfully submitted.',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            console.log('ok clicked');
            this.navCtrl.setRoot(TabsPage);
          }
        },
        
      ]
    });
    confirm.present();

  }
}
