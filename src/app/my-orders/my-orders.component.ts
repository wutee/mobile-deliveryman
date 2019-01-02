import { Component, OnInit } from '@angular/core';
import {MyOrdersService} from './my-orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  myOrders$;

  constructor(private myOrdersService: MyOrdersService) { }

  ngOnInit() {
    this.myOrders$ = this.myOrdersService.getAll();
  }

}
