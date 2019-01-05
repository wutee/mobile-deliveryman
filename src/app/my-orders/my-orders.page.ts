import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {FoodOrder, OrderStatus} from '../../client';
import {OrderService} from '../orders/order.service';
import {Router} from '@angular/router';
import {forEach} from '@angular-devkit/schematics';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage {
  activeOrders$: Observable<FoodOrder[]>;
  deliveredOrders$: Observable<FoodOrder[]>;
  isList: boolean;
  selectedOrder: any;

  constructor(
    public orderService: OrderService,
    private router: Router
  ) {
    this.getMyOrders();

  }

  getMyOrders(): void {
    this.isList = true;
    this.activeOrders$ = this.orderService.getMyActiveOrders();
    this.deliveredOrders$ = this.orderService.getMyDeliveredOrders();
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
}
