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

import { RestaurantWorker } from '../model/restaurantWorker';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RestaurantWorkerResourceService {

    protected basePath = '';
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
     * createRestaurantWorker
     * 
     * @param restaurantWorker restaurantWorker
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRestaurantWorkerUsingPOST(restaurantWorker: RestaurantWorker, observe?: 'body', reportProgress?: boolean): Observable<RestaurantWorker>;
    public createRestaurantWorkerUsingPOST(restaurantWorker: RestaurantWorker, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RestaurantWorker>>;
    public createRestaurantWorkerUsingPOST(restaurantWorker: RestaurantWorker, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RestaurantWorker>>;
    public createRestaurantWorkerUsingPOST(restaurantWorker: RestaurantWorker, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (restaurantWorker === null || restaurantWorker === undefined) {
            throw new Error('Required parameter restaurantWorker was null or undefined when calling createRestaurantWorkerUsingPOST.');
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

        return this.httpClient.post<RestaurantWorker>(`${this.basePath}/api/restaurant-workers`,
            restaurantWorker,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteRestaurantWorker
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRestaurantWorkerUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteRestaurantWorkerUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteRestaurantWorkerUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteRestaurantWorkerUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteRestaurantWorkerUsingDELETE.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/restaurant-workers/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllRestaurantWorkers
     * 
     * @param eagerload eagerload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRestaurantWorkersUsingGET(eagerload?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<RestaurantWorker>>;
    public getAllRestaurantWorkersUsingGET(eagerload?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RestaurantWorker>>>;
    public getAllRestaurantWorkersUsingGET(eagerload?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RestaurantWorker>>>;
    public getAllRestaurantWorkersUsingGET(eagerload?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<RestaurantWorker>>(`${this.basePath}/api/restaurant-workers`,
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
     * getRestaurantWorker
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRestaurantWorkerUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<RestaurantWorker>;
    public getRestaurantWorkerUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RestaurantWorker>>;
    public getRestaurantWorkerUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RestaurantWorker>>;
    public getRestaurantWorkerUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getRestaurantWorkerUsingGET.');
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

        return this.httpClient.get<RestaurantWorker>(`${this.basePath}/api/restaurant-workers/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateRestaurantWorker
     * 
     * @param restaurantWorker restaurantWorker
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRestaurantWorkerUsingPUT(restaurantWorker: RestaurantWorker, observe?: 'body', reportProgress?: boolean): Observable<RestaurantWorker>;
    public updateRestaurantWorkerUsingPUT(restaurantWorker: RestaurantWorker, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RestaurantWorker>>;
    public updateRestaurantWorkerUsingPUT(restaurantWorker: RestaurantWorker, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RestaurantWorker>>;
    public updateRestaurantWorkerUsingPUT(restaurantWorker: RestaurantWorker, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (restaurantWorker === null || restaurantWorker === undefined) {
            throw new Error('Required parameter restaurantWorker was null or undefined when calling updateRestaurantWorkerUsingPUT.');
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

        return this.httpClient.put<RestaurantWorker>(`${this.basePath}/api/restaurant-workers`,
            restaurantWorker,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}