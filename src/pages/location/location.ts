import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class Location {

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker) {
 
  }
 
  start(){
    this.locationTracker.startTracking();
  }
 
  stop(){
    this.locationTracker.stopTracking();
  }
}
