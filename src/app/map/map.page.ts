import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {GoogleMaps, GoogleMap, GoogleMapOptions, Environment} from '@ionic-native/google-maps/ngx';
import {GeopositionService} from './service/geoposition.service';
import {RestaurantGeoposition} from './model/restaurant-geoposition';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: GoogleMap;
  device_geoposition: Geoposition;
//  restaurants_geoposition: RestaurantGeoposition[];
  private google: any;


  async ngOnInit() {
    await this.platformService.ready();
    this.device_geoposition = await this.geopositionService.get_device_geoposition();

    this.loadMap();
  //  this.get_restaurants_geoposition();
    this.draw_road();
  }

  constructor(private platformService: Platform, private geopositionService: GeopositionService, private googleMaps: GoogleMaps, private route: ActivatedRoute) {
    this.route.snapshot.paramMap.get('id');
  }
  draw_road() {
    //let choice_restaurant:
    let path2:[
      {lat: 52.772, lng: 21.214},
      {lat: 52.291, lng: 23.821}
    ];

    /*
    let path: [
      {choice_restaurant},
      {get_device_geoposition}
      ];
*/
    let flightPath = new this.google.maps.Polyline({
      path: path2,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    return flightPath;
  }

  loadMap(): void {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBNvmvnqWm94i0QPftK95siu8dMErRnF1g',
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBNvmvnqWm94i0QPftK95siu8dMErRnF1g'
    });

    this.create_map(this.device_geoposition.coords.latitude, this.device_geoposition.coords.longitude, 8, 18);
    this.add_maker('Your position', 'blue', this.device_geoposition.coords.latitude, this.device_geoposition.coords.longitude);
  }

  private create_map(latitude: number, longitude: number, zoom: number, tilt: number): void {
    this.map = this.googleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: latitude,
          lng: longitude
        },
        zoom: zoom,
        tilt: tilt
      }
    });
  }

  private add_maker(title: string, icon: string, latitude: number, longitude: number): void {
    this.map.addMarker({
      title: title,
      icon: icon,
      animation: 'DROP',
      position: {
        lat: latitude,
        lng: longitude
      }
    });
  }
/*
  get_restaurants_geoposition(): void {
    this.geopositionService.get_restaurants_geoposition()
      .then(resp => {
        this.restaurants_geoposition = resp;
        resp.forEach(r => this.add_maker(r.restaurant.nameSlug, 'red', r.latitude, r.longitude));
      })
      .catch(err => console.log(err));
  }
*/
}
