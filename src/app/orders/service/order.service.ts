import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = 'https://propsy-backend-v0.herokuapp.com/api/food-orders?eagerload=false';

  constructor(public http: HttpClient) {
  }

  getAwaitingOrders() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getOrdersWithPhrase(phrase) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(Object.values(data).filter(
          order => (
            order.restaurant.nameSlug.toLowerCase().search(phrase.toLowerCase()) !== -1 && order.status === 2))
        );
      }, err => {
        console.log(err);
      });
    });
  }

  assignOrder(orderID) {
    this.http.get(this.apiUrl);
  }
}
