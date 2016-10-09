import { Component, Input, OnInit } from '@angular/core';
import {CustomerComponent} from './customer.component';
import {CustomerService} from './customer.service';
import { Observable } from 'rxjs/Rx';
@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    entryComponents:[CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit{ 
        customers : Observable<any[]>;
    constructor(private _customerService : CustomerService){}
    
    ngOnInit(){
        this.customers = this._customerService.GetCustomers()
        .catch((err) =>{
            console.log(err);
            return Observable.of(true);
        });
    }
}
