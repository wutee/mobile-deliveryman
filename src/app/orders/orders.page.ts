import {Component, OnInit} from '@angular/core';
import {OrderService} from './service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders: any;
  clickedOrder = {restaurant: {nameSlug: ''}};
  isList: boolean;

  constructor(public orderService: OrderService) {
    this.getAwaitingOrders();

  }

  getAwaitingOrders() {
    this.isList = true;
    this.orderService.getAwaitingOrders()
      .then(data => {
        this.orders = data;
      });
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
    this.clickedOrder = order;
  }

  goBack() {
    this.isList = true;
  }
}
