import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';
import {FoodOrder, FoodOrderResourceService} from '../../client';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders: any;
  isList: boolean;
  selectedOrder: any;



  constructor(public orderService: OrderService) {
    this.getAwaitingOrders();

  }

  getAwaitingOrders() {
    this.isList = true;
    this.orderService.getAwaitingOrders()
      .then((data: FoodOrder[]) => {
        this.orders = data;
      });
  }

  assign(orderID) {
    this.orderService.assignOrder(orderID);
  }

  search(event) {
    event.preventDefault();
    this.orderService.getOrdersWithPhrase(event.target.elements[0].value)
      .then(data => {
        this.orders = data;
      });
  }

  getDetails(order) {
    this.isList = false;
    this.selectedOrder = order;
  }

  goBack() {
    this.isList = true;
  }

}
