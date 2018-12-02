import {Component, OnInit} from '@angular/core';
import {OrderService} from './service/order.service';
import {FoodOrder, FoodOrderResourceService} from '../../client';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders: any;
  clickedOrder = {restaurant: {nameSlug: ''}};
  isList: boolean;

  constructor(public orderService: OrderService, public http: HttpClient, private foodOrderService: FoodOrderResourceService) {
    this.getAwaitingOrders();
  }

  getAwaitingOrders() {
    this.isList = true;
    this.orderService.getAwaitingOrders()
      .then((data: FoodOrder[]) => {
        this.orders = data.filter((order) => (order.status === 2 || order.status === 3) && !!!order.delivery);
      });
  }

  registerOrderForDelivery(order: FoodOrder) {
    this.foodOrderService.getAllFoodOrdersUsingGET().subscribe((resource) => console.log(resource));
    order.delivery = {id: 1, name: 'Kazik', surname: 'Pan'};
    this.foodOrderService.updateFoodOrderUsingPUT(order).subscribe((response) => console.log(response));
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
