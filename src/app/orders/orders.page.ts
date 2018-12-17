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
  clickedOrder = {restaurant: {nameSlug: ''}};


  constructor(public orderService: OrderService) {
    this.getAwaitingOrders();

  }

  getAwaitingOrders() {
    this.isList = true;
    this.orderService.getAwaitingOrders()
      .then((data: FoodOrder[]) => {
        this.orders = data.filter((order) => (order.status === 2 || order.status === 3) && !!!order.delivery);
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
    this.clickedOrder = order;
  }
  getMap(orderID) {
    window.location.replace('map/' + orderID);
  }

  goBack() {
    this.isList = true;
  }

}
