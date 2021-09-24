export class Address {
    
    private _id: string;
    private _customerId: string;
    private _street: string;
    private _district: string;
    private _number: string;
    private _complement: string;
    private _postalCode: string;
    private _city: string;
    private _state: string;

    generateId(){
        this.id = new Date().getTime().toString();
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }
    
    public get customerId(): string {
        return this._customerId;
    }

    public set customerId(value: string) {
        this._customerId = value;
    }
    
    public get street(): string {
        return this._street;
    }

    public set street(value: string) {
        this._street = value;
    }
    
    public get district(): string {
        return this._district;
    }

    public set district(value: string) {
        this._district = value;
    }
    
    public get number(): string {
        return this._number;
    }
    public set number(value: string) {
        this._number = value;
    }

    public get complement(): string {
        return this._complement;
    }
    public set complement(value: string) {
        this._complement = value;
    }
    
    public get postalCode(): string {
        return this._postalCode;
    }
    public set postalCode(value: string) {
        this._postalCode = value;
    }
    
    public get city(): string {
        return this._city;
    }

    public set city(value: string) {
        this._city = value;
    }
    
    public get state(): string {
        return this._state;
    }

    public set state(value: string) {
        this._state = value;
    }

}