import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const calPath = '//api.coinmarketcal.com/';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    clientId: string = '1420_670pxq71690k0gsc4c80sc4g80k0ogo8ock48goss844ssg448';
    clientSecret: string = '67nrhk29mj4s88gg0oo0s88s88kks8484osssgkksgo0sg4kso';

  constructor(private http: HttpClient) { }

    auth() {
      this.http.get(`${calPath}oauth/v2/token?grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
      .subscribe(data => {
          if (data) {
              this.setToken(data['access_token']);
          }
      });
    }

    getToken(): string {
      return localStorage.getItem('token');
    }

    setToken(token: string) {
      return localStorage.setItem('token', token);
    }

    removeToken() {
      return localStorage.removeItem('token');
    }

    getAccess() {
      if (!this.getToken()) {
          this.auth();
      }
      return this.getToken();
    }

    getEvents() {
      return this.http.get(`${calPath}v1/events?access_token=${this.getAccess()}&page=1&max=86&showOnly=hot_events`);
    }
}
