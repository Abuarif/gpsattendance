import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckDevice {

  constructor(public platform: Platform) {
    console.log('Hello CheckDevice Provider');
    if (this.platform.is('core')) {
      console.log("I'm running on Desktop!");
    } else if (this.platform.is('mobileweb')) {
      console.log("I'm running on mobile web!");
    }
  }

}
