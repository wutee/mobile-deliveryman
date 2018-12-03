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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { FoodOrder } from '../model/foodOrder';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FoodOrderResourceService {

    protected basePath = 'https://propsy-backend-v0.herokuapp.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createFoodOrder
     * 
     * @param foodOrder foodOrder
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createFoodOrderUsingPOST(foodOrder: FoodOrder, observe?: 'body', reportProgress?: boolean): Observable<FoodOrder>;
    public createFoodOrderUsingPOST(foodOrder: FoodOrder, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FoodOrder>>;
    public createFoodOrderUsingPOST(foodOrder: FoodOrder, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FoodOrder>>;
    public createFoodOrderUsingPOST(foodOrder: FoodOrder, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (foodOrder === null || foodOrder === undefined) {
            throw new Error('Required parameter foodOrder was null or undefined when calling createFoodOrderUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<FoodOrder>(`${this.basePath}/api/food-orders`,
            foodOrder,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteFoodOrder
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteFoodOrderUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteFoodOrderUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteFoodOrderUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteFoodOrderUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteFoodOrderUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/food-orders/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllFoodOrders
     * 
     * @param eagerload eagerload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllFoodOrdersUsingGET(eagerload?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<FoodOrder>>;
    public getAllFoodOrdersUsingGET(eagerload?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<FoodOrder>>>;
    public getAllFoodOrdersUsingGET(eagerload?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<FoodOrder>>>;
    public getAllFoodOrdersUsingGET(eagerload?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (eagerload !== undefined) {
            queryParameters = queryParameters.set('eagerload', <any>eagerload);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<FoodOrder>>(`${this.basePath}/api/food-orders`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getFoodOrder
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFoodOrderUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<FoodOrder>;
    public getFoodOrderUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FoodOrder>>;
    public getFoodOrderUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FoodOrder>>;
    public getFoodOrderUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getFoodOrderUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<FoodOrder>(`${this.basePath}/api/food-orders/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateFoodOrder
     * 
     * @param foodOrder foodOrder
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateFoodOrderUsingPUT(foodOrder: FoodOrder, observe?: 'body', reportProgress?: boolean): Observable<FoodOrder>;
    public updateFoodOrderUsingPUT(foodOrder: FoodOrder, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FoodOrder>>;
    public updateFoodOrderUsingPUT(foodOrder: FoodOrder, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FoodOrder>>;
    public updateFoodOrderUsingPUT(foodOrder: FoodOrder, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (foodOrder === null || foodOrder === undefined) {
            throw new Error('Required parameter foodOrder was null or undefined when calling updateFoodOrderUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<FoodOrder>(`${this.basePath}/api/food-orders`,
            foodOrder,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
