<template>
  <h1>Listado de pacientes</h1>






<!-- <div *ngIf="pacienteSeleccionado.dni == 0">
  <h1 style="text-align: center; margin-top: 50px">LISTADO DE PACIENTES</h1>
  <button
  type="submit"
  
  
  id="registrar"
  routerLink="/crear-paciente"
>
  REGISTRAR
</button>
  <div class="container d-flex align-items-center justify-content-center">
    <table
      *ngIf="listPacientes.length > 0"
      class="table table-dark table-striped"
      style="width: 1000px;margin-top: 100px; "
      
    >
      <thead>
        <tr>
          <th scope="col">Dni</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Telefono</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let paciente of listPacientes">
          <td>{{ paciente.dni }}</td>
          <td>{{ paciente.nombre }}</td>
          <td>{{ paciente.apellido }}</td>
          <td>{{ paciente.telefono }}</td>
          <td>
            <i
              (click)="gestionP(paciente)"

              class="fa-solid fa-pen-to-square text-primary"
                          ></i>


            <i
              (click)="eliminarPaciente(paciente._id)"
              class="fa-solid fa-trash text-danger"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <h5
      style="text-align: center; margin-top: 10px"
      *ngIf="listPacientes.length == 0"
    >
      no hay productos para mostrar
    </h5>
  </div>

  <button
    type="button"
    class="btnCS"
    id="btn3"
    routerLink="/buscar-listado-gestion"
  >
    VOLVER
  </button>
</div>
<div *ngIf="pacienteSeleccionado.dni != 0">
  <app-paciente-x [paciente]="pacienteSeleccionado" (devolucion)="devolver()">
  </app-paciente-x>
</div>
 -->





</template>

<script>


/* import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';


@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {

  listPacientes: Paciente[]=[];
  //pacienteSeleccionado: any
  pacienteSeleccionado: Paciente = new Paciente(0, '', '',0, new Date(), '', '', '')
  constructor(private _pacienteService: PacienteService, private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }
  obtenerPacientes() {

    //al devolver un paceinte nos tenemos que suscribir
    this._pacienteService.getPacientes().subscribe((data: Array<Paciente> )=>{
      console.log(data);
      console.log(this.listPacientes);

      this.listPacientes=data;
      console.log(this.listPacientes);

    }, error =>{
      console.log(error);
    })

  }
  eliminarPaciente(id:any){
    this._pacienteService.eliminarPaciente(id).subscribe(data =>{
      this.toastr.error('El paciente fue eliminado cone exito','Paciente eliminado');
      this.obtenerPacientes();
    }, error =>{
      console.log(error);
    })
  }
  gestionP(paciente:Paciente){
    this.router.navigate(['/paciente-x/'+paciente._id])
    /* this.pacienteSeleccionado=paciente;
    console.log(this.pacienteSeleccionado)
  } */
/* 
  devolver(){
    console.log('test')
    this.pacienteSeleccionado=  new Paciente(0, '', '',0, new Date(), '', '', '')
  }

} */ 
export default {

}
</script>

<style>

</style>