import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders: any;

  constructor(public orderService: OrderService) {
    this.getAwaitingOrders();

  }

  getAwaitingOrders() {
    this.orderService.getAwaitingOrders()
      .then(data => {
        this.orders = data;
      });
  }

}
