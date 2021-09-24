import { Address } from "../../../core/domains/v1/customer/address";

export class UpdateAddressCommand {

    private _address: Address;    

    constructor(address: Address){
        this.address = address;
    }

    public get address(): Address {
        return this._address;
    }
    public set address(value: Address) {
        this._address = value;
    }

        
}