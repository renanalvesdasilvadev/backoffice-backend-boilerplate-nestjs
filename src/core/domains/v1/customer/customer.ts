export class Customer {
    private _id: string;
    private _name: string;
    private _phone: string;
    private _email: string;

    public get id(): string {
        return this._id;
    }

    generateId(){
        this.id = new Date().getTime().toString();
    }
    
    public set id(value: string) {
        this._id = value;
    }    

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }    

    public get phone(): string {
        return this._phone;
    }

    public set phone(value: string) {
        this._phone = value;
    }
    
    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }
}