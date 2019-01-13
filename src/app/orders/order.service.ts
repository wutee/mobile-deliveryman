import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FoodOrder, OrderStatus} from '../../client/model/foodOrder';
import {from, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {AuthService} from '../../lib/auth/auth.service';
import {MapPage} from '../map/map.page';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private foodOrders: FoodOrder[] = [];
  public id: number;
  public order: string;
  public lat: number;
  public lng: number;


  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAwaitingOrders(): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>('api/food-orders')
      .pipe(
        map(i => i.filter(a => a.restaurant != null && a.status === OrderStatus.TO_PICK_UP)),
        tap(i => {
          this.foodOrders = i;
        })
      );

  }

  getOrdersWithPhrase(phrase: string): Observable<FoodOrder[]> {
    return from([
      this.foodOrders
        .filter(a => a.restaurant.nameSlug.toLowerCase().search(phrase.toLowerCase()) !== -1)
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

  setSelectedOrder(id: number) {
    this.id = id;
    console.log("serwicet");
    console.log(this.id);

  }
  setSelectedOrders(lat: number, lng: number){
    OrderService.lat= lat;
    OrderService.lng= lng;
  }
  get_id() {
    return this.id;
  }
  setOrder(order: string) {
    this.order = order;
    console.log("order::");
    console.log(this.order);
  }
}

