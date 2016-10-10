import { Component, Input, OnInit } from '@angular/core';
import { ITicket } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit{ 
    
    @Input() customer : ITicket;

    constructor(){}
    
    ngOnInit(){}
}
