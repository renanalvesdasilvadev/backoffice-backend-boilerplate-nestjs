import { Customer } from "../../../core/domains/v1/customer/customer";

export class UpdateCustomerCommand {

    private _customer: Customer;    

    constructor(customer: Customer){
        this.customer = customer;
    }

    public get customer(): Customer {
        return this._customer;
    }
    public set customer(value: Customer) {
        this._customer = value;
    }

        
}