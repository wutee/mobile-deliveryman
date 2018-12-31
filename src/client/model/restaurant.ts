/**
 * propsyBackendv01 API
 * propsyBackendv01 API documentation
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import {FoodOrder} from './foodOrder';
import {Menu} from './menu';


export interface Restaurant {
  address?: string;
  id?: number;
  menus?: Array<Menu>;
  nameSlug: string;
  orders?: Array<FoodOrder>;
  ownerId?: string;
}

export interface IRestaurant extends Restaurant {

}
