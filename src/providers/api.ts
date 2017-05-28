import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {

  constructor(private http: Http, private datePipe: DatePipe) {}

  public signin(username, password) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append("Access-Control-Allow-Origin", "");
      headers.append("Access-Control-Allow-Credentials", "true");
      headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

      this.http.get(localStorage.getItem('serverPath')+'/api/auth.json?username=' + username + '&password=' + password)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public signup(name, staffNumber, email) { 
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(localStorage.getItem('serverPath')+'/api/signup.json?name=' + name + '&staff_number=' + staffNumber + '&email=' + email)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public submitTag(direction: number, lat: number, long: number, timestamp: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      timestamp = this.datePipe.transform(timestamp, 'yyyy-MM-dd H:mm:ss');
      console.log('timestamp: ' + timestamp);
      headers.append('Authorization', localStorage.getItem("token"));

      this.http.get(localStorage.getItem('serverPath')+'/api/log.json?key=' + localStorage.getItem("token") + '&tag_date=' + timestamp + '&direction=' + direction + '&lat=' + lat + '&long=' + long + '&user_id=' + localStorage.getItem("user_id"))
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public get_submission_history(limit) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', localStorage.getItem("token"));

      this.http.get(localStorage.getItem('serverPath')+'/api/activity.json?key=' + localStorage.getItem("token") + '&limit=' + limit )
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  public get_latest() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', localStorage.getItem("token"));

      this.http.get(localStorage.getItem('serverPath')+'/api/last.json?user_id=' + localStorage.getItem("user_id"))
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
}
