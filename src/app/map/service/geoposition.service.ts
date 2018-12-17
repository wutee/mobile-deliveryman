import {Injectable} from '@angular/core';
import {RestaurantResourceService, Restaurant} from '../../../client';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {Geocoder, GeocoderRequest, GeocoderResult} from '@ionic-native/google-maps/ngx';
import {RestaurantGeoposition} from '../model/restaurant-geoposition';

declare var google;

@Injectable({
  providedIn: 'root'
})
export class GeopositionService {
  currentMapTrack = null;

  constructor(
    private restaurantService: RestaurantResourceService,
    private geolocation: Geolocation
  ) {
  }

  public async get_device_geoposition(): Promise<Geoposition> {
    let device_geoposition: Geoposition = null;

    await this.geolocation.getCurrentPosition()
      .then(resp => device_geoposition = resp)
      .catch(err => console.log(err));

    return device_geoposition;
  }

  /*
    public async get_restaurant_geoposition(restaurant: Restaurant): Promise<RestaurantGeoposition> {
      let restaurant_geoposition: RestaurantGeoposition = null;

      if (restaurant.address != null) {
        let options: GeocoderRequest = {
          address: restaurant.address
        };

        await Geocoder.geocode(options)
          .then((resp: GeocoderResult[]) => {
            restaurant_geoposition = new RestaurantGeoposition(restaurant, resp[0].position.lat, resp[0].position.lng)
          })
          .catch(err => console.log(err))
      }

      return restaurant_geoposition
    }

    public async get_restaurants_geoposition(): Promise<RestaurantGeoposition[]> {
      let restaurants = await this.restaurantService.getAllRestaurantsUsingGET().toPromise();
      let restaurnts_geoposition: RestaurantGeoposition[] = new Array();

      for (const restaurant of restaurants) {
        await this.get_restaurant_geoposition(restaurant)
          .then(resp => restaurnts_geoposition.push(resp))
          .catch(err => console.log(err))
      }

      return restaurnts_geoposition
    }

  */
}
