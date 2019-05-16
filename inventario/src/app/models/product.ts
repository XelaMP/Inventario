export class product {

    constructor(_id_producto='', name_producto='',_id_category='',description='',stock=0,price=0,_id_compability=''){
        this._id_producto=  _id_producto;
        this.name_producto= name_producto;
        this._id_category=_id_category;
        this.description=description;
        this.stock=stock;
        this.price=price;
        this._id_compability=_id_compability;

       
        
      
}
    _id_producto: string;
    name_producto:string;
    _id_category:string;
    description:string;
    stock:number;
    price:number;
    _id_compability:string;
  

}
