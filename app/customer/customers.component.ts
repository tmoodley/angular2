import { Component, Input, OnInit } from '@angular/core';
import {CustomerComponent} from './customer.component';
import {CustomerService} from './customer.service';
import { Observable } from 'rxjs/Rx';
import { DataService } from '../shared/services/data.service';
import { ITicket } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    entryComponents:[CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit{ 
        customers: ITicket[] = []; 
        constructor(private _dataService : DataService){}
    
    ngOnInit(){
         this._dataService.getCustomersSummary()
            .subscribe((data: ITicket[]) => this.customers = data); 
           
        //.catch((err) =>{
          //  console.log(err);
            //return Observable.of(true);
        // });
    }

   
}
