import { Observable } from "rxjs";

export class PacienteTratamiento {
  
  tratamiento: string;
  finicio: Date;
  medicacion: string;
  visitas: number;
  estado: string;

  constructor(
    
    tratamiento: string,
    finicio: Date,
    medicacion: string,
    visitas: number,
    estado: string
  ) {
    
    this.tratamiento = tratamiento;
    this.finicio = finicio;
    this.medicacion = medicacion;
    this.visitas = visitas;
    this.estado = estado;
  }


}
