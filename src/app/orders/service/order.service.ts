import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = 'https://propsy-backend-v0.herokuapp.com/api/food-orders';

  constructor(public http: HttpClient) {
  }

  getAwaitingOrders() {
    return new Promise(resolve => {
      this.http.put(this.apiUrl, {}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });  }
}
