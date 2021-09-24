export class User {
    
    private _id: string
    private _login: string    
    private _password: string    

    generateId(){
        this.id = new Date().getTime().toString();
    }

    public get id(): string {
        return this._id
    }
    
    public set id(value: string) {
        this._id = value
    }

    public get login(): string {
        return this._login
    }

    public set login(value: string) {
        this._login = value
    }

    public get password(): string {
        return this._password
    }

    public set password(value: string) {
        this._password = value
    }

}