<template>
  <header>
    <div class="wrapper">
      <h1>TRATAMIENTOS</h1>

      <RouterLink to="/nuevo-tratamiento">
        <button type="button" class="btn btn-info">Nuevo tratamiento</button>
      </RouterLink>

      <RouterLink to="/home-page">
        <button type="button" class="btn btn-secondary">
          volver
        </button>
        </RouterLink>

      <nav>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Duracion</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="tratamiento in tratamientos"
              :key="tratamiento.codigo"
            >
              <td scope="row">{{ tratamiento?.codigo }}</td>
              <td>{{ tratamiento.nombre }}</td>
              <td>{{ tratamiento.precio }}</td>
              <td>{{ tratamiento.duracion }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  v-on:click="esEditar(tratamiento.codigo)"
                >
                  Editar
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </div>
  </header>

  <!-- <div *ngIf="tratamientoSeleccionado.codigo == 0">
  <h1 style="text-align: center; margin-top: 50px">LISTADO DE TRATAMIENTOS</h1>
  <div class="container d-flex align-items-center justify-content-center">
    <table
      *ngIf="listTratamientos.length > 0"
      class="table table-dark table-striped"
      style="width: 1000px"
    >
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Duracion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let tratamiento of listTratamientos">
          <td>{{ tratamiento.codigo }}</td>
          <td>{{ tratamiento.nombre }}</td>
          <td>{{ tratamiento.precio }}</td>
          <td>{{ tratamiento.duracion }}</td>
          <td>
            <i 
              [routerLink]="['/editar-tratamiento',tratamiento._id ]"
              class="fas fa-edit text-primary"
              ></i>
            <i
              (click)="eliminarTratamiento(tratamiento._id)"
              class="fa-solid fa-trash text-danger"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <h5
      style="text-align: center; margin-top: 10px"
      *ngIf="listTratamientos.length == 0"
    >
      no hay productos para mostrar
    </h5>
  </div>

  <button
    type="button"
    class="btnCS"
    id="btn3"
    routerLink="/gestion-tratamientos"
  >
    VOLVER
  </button>
</div>
<div *ngIf="tratamientoSeleccionado.codigo != 0">
<app-editar-tratamiento [tratamiento]="tratamientoSeleccionado"(devolucion)="devolver()">
  
</app-editar-tratamiento>
</div> -->
</template>

<script>
/* import axios from 'axios';
import { computed, ref } from 'vue'; */
export default {
  data() {
    return {
      tratamientos: [],
    };
  },
  mounted() {
    this.consultarTratamientos();
  },
  methods: {
    consultarTratamientos() {
      fetch("http://localhost:4000/api/tratamientos")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.tratamientos = [];
          if (typeof datosRespuesta[0].success === "undefined") {
            this.tratamientos = datosRespuesta;
          }
        })
        .catch(console.log);
    },
    esEditar(id) {
      this.$router.push(`/editar-tratamientos/${id}`);
    },
    /* consultarUsuarios() {
            fetch('http://localhost:8000/api/user').then(respuesta => respuesta.json()).then((datosRespuesta) => {
                console.log(datosRespuesta)
                this.usuarios = []
                if (typeof datosRespuesta[0].success === 'undefined') {
                    this.usuarios = datosRespuesta;
                }
                this.consultarProvincias();
            }).catch(console.log);
        }, */
  },
};

/* import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tratamiento } from 'src/app/models/tratamiento';
import { TratamientoService } from 'src/app/services/tratamiento.service';

@Component({
  selector: 'app-listar-tratamientos',
  templateUrl: './listar-tratamientos.component.html',
  styleUrls: ['./listar-tratamientos.component.css'],
})
export class ListarTratamientosComponent implements OnInit {
  listTratamientos: Tratamiento[] = [];
  tratamientoSeleccionado: Tratamiento = new Tratamiento(0, '', '', 0, '');

  constructor(
    private _tratamientoService: TratamientoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerTratamientos();
  }
  obtenerTratamientos() {
    //al devolver un tratamiento nos tenemos que suscribir
    this._tratamientoService.getTratamientos().subscribe(
      (data: Array<Tratamiento>) => {
        console.log(data);
        console.log(this.listTratamientos);

        this.listTratamientos = data;
        console.log(this.listTratamientos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarTratamiento(id: any) {
    this._tratamientoService.eliminarTratamiento(id).subscribe(
      (data) => {
        this.toastr.error(
          'El tratamiento fue eliminado cone exito',
          'Tratamiento eliminado'
        );
        this.obtenerTratamientos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  gestionT(tratamiento: Tratamiento) {
    this.tratamientoSeleccionado = tratamiento;
    console.log(this.tratamientoSeleccionado);
  }

  devolver() {
    console.log('test');
    this.tratamientoSeleccionado = new Tratamiento(0, '', '', 0, '');
  }
}
 */

//TRATAMIENTO SERVICE

/* //los servicios se suelen usar para hacer las peticiones http

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from '../models/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
  url='http://localhost:4000/api/tratamientos/';

  constructor(private http: HttpClient) { }

  getTratamientos() :Observable<any> {
    return this.http.get(this.url)

  }

  eliminarTratamiento(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }
  guardarTratamiento(tratamiento:Tratamiento):Observable<any>{
    return this.http.post(this.url, tratamiento);
  }
obtenerTratamiento(id:string) :Observable<any>{
  return this.http.get(this.url + id);
}
editarTratamiento(id: string,tratamiento: Tratamiento):Observable<any>{
  return this.http.put(this.url + id,tratamiento);
}

  }
 */
</script>

<style>
</style>