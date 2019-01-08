import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../orders/order.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  // public lat: Number = 24.799448;
  // public lng: Number = 120.979021;

  public lat: number;
  public lng: number;
  public origin: any;
  public destination: any;
  public id2: number;
  public order: string;
  public aaa: Number = 7;
  private route: ActivatedRoute;


  @Input()
  //id: number = this.orderService.id;
  latr: number = this.orderService.lat;
  lngr: number = this.orderService.lng;

  constructor( private orderService: OrderService, private router: Router) {

  }

  ngOnInit() {
    //this.getUserLocation();
    //this.id2 = this.orderService.id;
   // this.order = this.orderService.order;
    //console.log(this.order);
    console.log('numer id to ');
    console.log(this.lngr);
    this.getDirection();
  }
  // private getUserLocation() {
  //   /// locate the user
  //
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //       this.origin = { lat: this.lat, lng: this.lng };
  //       this.destination = { lat: 52.220072, lng: 21.0121157 };
  //     });
  //
  //
  //   }
  //  }
  getDirection() {

  console.log("basia ian  niaa");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.origin = { lat: this.latr, lng: this.lngr};
        //this.origin = { lat: 52.1912856, lng: 20.9540901 };
        //this.origin = { lat: 52.214711, lng: 20.955437 };
        this.destination  = { lat: 52.220072, lng: 21.0121157 };
      });
    }
  }


}
