import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import {CustomersComponent} from './customer/customers.component';

 
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',  
    entryComponents:[CustomersComponent]
})
export class AppComponent { 
    title = 'Customer App';
    name = 'tyrone';
    wardscolor = 'blue';


    changeSuitColor(){
        this.wardscolor = this.wardscolor === 'blue' ? 'red' : 'blue'; 
    }
}
