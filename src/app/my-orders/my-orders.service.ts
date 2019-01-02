import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('api/food-orders/deliveredByMe');
  }
}
