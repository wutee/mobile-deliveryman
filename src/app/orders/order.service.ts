import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FoodOrder, OrderStatus} from '../../client/model/foodOrder';
import {from, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {AuthService} from '../../lib/auth/auth.service';
import {IUser} from '../../client';

// import {FoodOrderResourceService} from '../../client/api/foodOrderResource.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private awaitingOrders: FoodOrder[] = [];
  private activeOrders: FoodOrder[] = [];
  private deliveredOrders: FoodOrder[] = [];
  private myAccount: IUser;


  constructor(private http: HttpClient, private authService: AuthService) {
    this.myAccount = this.authService.whoAmI();
  }

  getAwaitingOrders(): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>('api/food-orders')
      .pipe(
        map(i => i.filter(a => a.restaurant != null && a.status === OrderStatus.TO_PICK_UP)),
        tap(i => {
          this.awaitingOrders = i;
        })
      );

  }

  getMyActiveOrders(): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>('api/food-orders')
      .pipe(
        map(i => i.filter(a => a.status === OrderStatus.IN_DELIVERY)),
        tap(i => {
          this.activeOrders = i;
        })
      );

  }

  getMyDeliveredOrders(): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>('api/food-orders')
      .pipe(
        map(i => i.filter(a => a.status === OrderStatus.DELIVERED)),
        tap(i => {
          this.deliveredOrders = i;
        })
      );

  }

  // getMyActiveOrders(): Observable<FoodOrder[]> {
  //   return this.http.get<FoodOrder[]>('api/food-orders').pipe(
  //     map(i => i.filter(
  //       a => a.deliveryman && a.deliveryman.email === this.myAccount.email && a.status === OrderStatus.IN_DELIVERY)),
  //     tap(i => {
  //       this.foodOrders = i;
  //       console.log(i);
  //     })
  //   );
  //
  // }
  //
  // getMyDeliveredOrders(): Observable<FoodOrder[]> {
  //   return this.http.get<FoodOrder[]>('api/food-orders')
  //     .pipe(
  //       map(i => i.filter(
  //         a => this.myAccount && a.deliveryman && a.deliveryman.email === this.myAccount.email && a.status === OrderStatus.DELIVERED)),
  //       tap(i => {
  //         this.foodOrders = i;
  //         console.log(i);
  //       })
  //     );
  //
  // }

  getAwaitingOrdersWithPhrase(phrase: string): Observable<FoodOrder[]> {
    return from([
      this.awaitingOrders
        .filter(a => a.restaurant.nameSlug.toLowerCase().search(phrase.toLowerCase()) !== -1),
    ]);
  }

  getActiveOrdersWithPhrase(phrase: string): Observable<FoodOrder[]> {
    return from([
      this.activeOrders
        .filter(a => a.restaurant.nameSlug.toLowerCase().search(phrase.toLowerCase()) !== -1),
    ]);
  }

  getDeliveredOrdersWithPhrase(phrase: string): Observable<FoodOrder[]> {
    return from([
      this.deliveredOrders
        .filter(a => a.restaurant.nameSlug.toLowerCase().search(phrase.toLowerCase()) !== -1),
    ]);
  }

  assignOrder(order: FoodOrder): Observable<any> {
    const updatedOrder: FoodOrder = {
      ...order,
      deliveryman: this.authService.whoAmI(),
      status: OrderStatus.IN_DELIVERY
    };
    return this.http.put<FoodOrder>('api/food-orders/', updatedOrder);
  }
}
