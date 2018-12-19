import {Component, OnInit} from '@angular/core';
import {OrderService} from './service/order.service';
import {FoodOrder, FoodOrderResourceService} from '../../client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders: any;
  isList: boolean;
  selectedOrder: any;


  constructor(
    public orderService: OrderService,
    private router: Router
  ) {
    this.getAwaitingOrders();

  }

  getAwaitingOrders() {
    this.isList = true;
    this.orderService.getAwaitingOrders()
      .then(this.handleNewOrders());
  }

  assign(orderID) {
    this.orderService.assignOrder(orderID);
  }

  search(event) {
    this.orderService.getOrdersWithPhrase(event.detail.value)
      .then(this.handleNewOrders());
  }

  getDetails(order) {
    this.isList = false;
    this.selectedOrder = order;
  }

  getMap(orderId: number): void {
    this.router.navigate(['map', orderId]);
  }

  goBack() {
    this.isList = true;
  }

  private handleNewOrders(): (data: FoodOrder[]) => void {
    return (data: FoodOrder[]) => {
      this.orders = data;
    };
  }
}
