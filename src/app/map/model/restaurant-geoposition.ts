import { Restaurant }from '../../../client/model/restaurant';
import { Geoposition } from '@ionic-native/geolocation/ngx';


export class RestaurantGeoposition{
  restaurant: Restaurant;
  latitude: number;
  longitude: number;

  constructor(restaurant: Restaurant, latitude: number, longitude: number) {
    this.restaurant = restaurant;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  public calculate_distance(geoposition: Geoposition) {
    return Math.sqrt(Math.pow(geoposition.coords.latitude - this.latitude, 2) + Math.pow(geoposition.coords.longitude - this.longitude, 2))
  }
}
