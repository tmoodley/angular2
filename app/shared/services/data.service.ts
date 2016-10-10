import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
const URL_CUSTOMER = 'http://clients.rankhigher.ca/api/tickets';
import { ITicket } from '../interfaces';

@Injectable()
export class DataService{
    constructor(private _http : Http) { }
    getCustomersSummary() : Observable<ITicket[]> {
        //get my DataService
     return this._http.get(URL_CUSTOMER)
                .map((response: Response) => response.json()) 
                .catch(this._handleError); 
       
           //.toPromise()
           //.catch((err: any) => {
           //console.log(err);
           //return Promise.reject(err);
            //});
    }

     _handleError(err: any){
        console.log(err); 
        return Observable.throw(err);
    }
}