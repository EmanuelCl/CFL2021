export default class Usuario{
    private id:number;
    private name:string;
    private username:string;
    private email:string;
    private address:string;
    private phone:number;
    private website:string;
    private company:string;

    public constructor(id:number,name:string,username:string,email:string,address:string,phone:number,website:string,company:string){
        this.id=id;
        this.name=name;
        this.username=username;
        this.email=email;
        this.address=address;
        this.phone=phone;
        this.website=website;
        this.company=company;
    }
    public getId():number{
        return this.id;
    }
    public getName():string{
        return this.name;
    }
    public getUsername():string{
        return this.username;
    }
    public getEmail():string{
        return this.email;
    }
    public getAddress():string{
        return this.address;
    }
    public getPhone():number{
        return this.phone;
    }
    public getWebsite():string{
        return this.website;
    }
    public getCompany():string{
        return this.company;
    }
}