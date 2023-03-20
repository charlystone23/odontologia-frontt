export class Paciente{
    _id?:number;
    dni:number;
    nombre:string;
    apellido:string;
    telefono:number;
    fnac:Date;
    calle:string;
    localidad:string;
    provincia:string;
    

    constructor(dni:number,nombre:string,apellido:string,telefono:number,fnac:Date,calle:string,localidad:string,provincia:string){
        this .dni= dni;
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
        this.fnac=fnac;
        this.calle=calle;
        this.localidad=localidad;
        this.provincia=provincia;
    }

}