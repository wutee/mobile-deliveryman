import {Component, OnInit} from '@angular/core';
import {OrderService} from './order.service';
import {FoodOrder, FoodOrderResourceService} from '../../client';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders$: Observable<FoodOrder[]>;
  isList: boolean;
  selectedOrder: any;

  constructor(
    public orderService: OrderService,
    private router: Router
  ) {
    this.getAwaitingOrders();

  }

  getAwaitingOrders(): void {
    this.isList = true;
    this.orders$ = this.orderService.getAwaitingOrders();
  }

  assign(order: FoodOrder): void {
    this.orderService.assignOrder(order)
      .subscribe(() => this.getAwaitingOrders());
  }

  search(event) {
    this.orders$ = this.orderService.getOrdersWithPhrase(event.detail.value);
  }

  getDetails(order) {
    this.isList = false;
    this.selectedOrder = order;
  }

  async getMap(order) {
    await this.orderService.setSelectedOrders(order.restaurant.latitude, order.restaurant.longitude);
    console.log("orders");
    //this.orderService.setOrder(order);
    //window.location.replace('tabs/(map:map)');
  }
  getMap2(order) {
    window.location.replace('tabs/(map:map)');
  }

  goBack() {
    this.isList = true;
  }
}
