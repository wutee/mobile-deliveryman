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
  activeOrders$: Observable<FoodOrder[]>;
  deliveredOrders$: Observable<FoodOrder[]>;
  isList: boolean;
  showMyOrders: boolean;
  selectedOrder: any;

  constructor(
    public orderService: OrderService,
    private router: Router
  ) {
    this.showMyOrders = false;
    this.getOrders();

  }

  getOrders(): void {
    this.isList = true;
    this.orders$ = this.orderService.getAwaitingOrders();
    this.activeOrders$ = this.orderService.getMyActiveOrders();
    this.deliveredOrders$ = this.orderService.getMyDeliveredOrders();
    console.log(this.deliveredOrders$);
  }

  assign(order: FoodOrder): void {
    this.orderService.assignOrder(order)
      .subscribe(() => this.getOrders());
  }

  searchAwaitingOrders(event) {
    this.orders$ = this.orderService.getAwaitingOrdersWithPhrase(event.detail.value);
  }

  searchUserOrders(event) {
    this.activeOrders$ = this.orderService.getActiveOrdersWithPhrase(event.detail.value);
    this.deliveredOrders$ = this.orderService.getDeliveredOrdersWithPhrase(event.detail.value);

  }

  getDetails(order) {
    this.isList = false;
    this.selectedOrder = order;
  }

  getMap(order) {
    console.log("order");
    console.log(order);
    this.orderService.setSelectedOrders(order.restaurant.latitude, order.restaurant.longitude);
    this.router.navigateByUrl('tabs/(map:map)');
  }
  getMap2(order) {
    this.orderService.setSelectedOrders(order.restaurant.latitude, order.restaurant.longitude);
    this.router.navigateByUrl('tabs/(map:map)');
  }

  goBack() {
    this.isList = true;
  }
}
