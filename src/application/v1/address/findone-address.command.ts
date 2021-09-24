export class FindOneAddressCommand {

    private _id: string;    

    constructor(_id: string){
        this.id = _id;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

        
}