export class movimientos {

    constructor(_id_movimiento='',_id_producto='', count=0,price_unit=0, price_total=0, _id_user='', fecha='',hora='',tipo_movimiento='',){
        
        this._id_producto=  _id_producto;
        this.count= count;
        this.price_unit=price_unit;
        this.price_total=price_total;
        this._id_user=_id_user;
        this.fecha=fecha;
        this.hora=hora;
        this.tipo_movimiento=tipo_movimiento;
       
      

       
        
      
}
    _id_movimiento:string;
    _id_producto: string;
    count:number;
    price_unit:number;
    price_total:number;
    _id_user:string;
    fecha:string;
    hora:string;
    tipo_movimiento:string;
  
  
  

}
