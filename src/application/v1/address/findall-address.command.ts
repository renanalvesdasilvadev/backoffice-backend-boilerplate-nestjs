export class FindAllAddressCommand {

    private _customerId: string;    

    constructor(_customerId: string){
        this.customerId = _customerId;
    }

    public get customerId(): string {
        return this._customerId;
    }
    public set customerId(value: string) {
        this._customerId = value;
    }       
}