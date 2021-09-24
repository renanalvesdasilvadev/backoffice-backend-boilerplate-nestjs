export class FindAllCustomerCommand {

    private _filters: any[];    

    constructor(_filters: any[]){
        this.filters = _filters;
    }

    public get filters(): any[] {
        return this._filters;
    }
    public set filters(value: any[]) {
        this._filters = value;
    }       
}