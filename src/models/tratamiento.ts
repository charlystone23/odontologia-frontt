export class Tratamiento{
    _id?:number;
    codigo:number;
    nombre:string;
    descripcion:string;
    precio:number;
    duracion:string;
    
    

    constructor(codigo:number,nombre:string,descripcion:string,precio:number,duracion:string){
        this .codigo= codigo;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.duracion=duracion;
        
    }




}