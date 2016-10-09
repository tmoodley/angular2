import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Rx';
const URL_CUSTOMER = 'app/customers.json';
@Injectable()
export class CustomerService {
    
    constructor(private _http : Http) { }

    GetCustomers(){
           return this._http.get(URL_CUSTOMER)
           .map((response: Response) => response.json())
           .toPromise()
           .catch((err: any) => {
           console.log(err);
           return Promise.reject(err);
            });
    }

    _handleError(err: any){
        console.log(err); 
        return Observable.throw(err);
    }
}