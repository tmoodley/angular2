export interface ITicket {
    Id: number;
    AssignedTo: string;
    ClientId: number;
    CreateDate: string;
    Name: string;
    Notes: string;
    Priority: number;
    RequestedBy: string;
    StatusesId: number; 
} 

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: IState;
    zip: number;
    gender: string;
    latitude: number;
    longitude: number;
    orderCount?: number;
    orders?: IOrder[];
    ordersTotal?: number;
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}