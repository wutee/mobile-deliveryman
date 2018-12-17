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
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(Object.values(data).filter(
          order => order.restaurant !== null && order.status === 2
          )
        );
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
            order.restaurant !== null && order.restaurant.nameSlug.toLowerCase().search(phrase.toLowerCase()) !== -1 && order.status === 2))
        );
      }, err => {
        console.log(err);
      });
    });
  }

  assignOrder(orderID) {
    this.http.get(this.apiUrl + '/' + orderID).subscribe(data => { console.log(data);
        // this.http.put(this.apiUrl, data.toString()).subscribe(
        //   response => {
        //     console.log(response);
        //   }
        // );
      }, err => {
      console.log(err);
    });
  }
}
