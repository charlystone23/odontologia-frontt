<template>
  <h1>Nuevo Tratamiento</h1>
  <div class="formulario" style="margin-left: 500px">
    <form class="col-5" v-on:submit.prevent="agregarRegistro">
       <div class="mb-3">
        <input
          type="number"
          class="form-control"
          v-model="tratamiento.codigo"
          id="codigo"
          name="codigo"
          placeholder="Codigo"
          required
        />
        <small id="helpId" class="form-text text-muted"
          >Codigo de Tratamiento</small
        >
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="tratamiento.nombre"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          required
        />
        <small id="helpId" class="form-text text-muted"
          >Nombre del tratamiento</small
        >
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="tratamiento.descripcion"
          id="descripcion"
          name="descripcion"
          placeholder="descripcion"
          required
        />
        <small id="helpId" class="form-text text-muted"
          >Descripcion del tratamiento</small
        >
      </div>

      <div class="mb-3">
        <input
          type="number"
          class="form-control"
          v-model="tratamiento.precio"
          id="precio"
          name="precio"
          placeholder="Precio"
          required
        />
        <small id="helpId" class="form-text text-muted"
          >Precio del tratamiento</small
        >
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="tratamiento.duracion"
          id="duracion"
          name="duracion"
          placeholder="Duracion"
          required
        />
        <small id="helpId" class="form-text text-muted"
          >Duracion del tratamiento</small
        >
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Agregar</button>
      </div>
    </form>
  </div>

  <!-- <template>
    
    <div class="container text-start">
        <div class="row">
            <div class="m-3">
                <h1>Agregar Provincia</h1>
            </div>
            <form class="col-5" v-on:submit.prevent="agregarRegistro">
                <div class="mb-3">
                    <input type="text" class="form-control" 
                    v-model="provincia.name" id="name" name="name" placeholder="Provincia" required>
                    <small id="helpId" class="form-text text-muted">Escribe la provincia</small>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Agregar</button>
                    <router-link to="/listar-provincias" style="margin-left: 10px;" type="submit" class="btn btn-warning">Cancelar</router-link>
                </div>
            </form>
        </div>
    </div>

    
</template> -->

  <RouterLink to="/listar-tratamientos">
    <button type="button" class="btn btn-secondary">
      cancelar
    </button></RouterLink
  >
</template>

<script>
export default {
  name: "Agregar-provincias",

  data() {
    return {
      tratamiento: {},
    };
  },
  methods: {
    async agregarRegistro() {
      console.log(this.provincia);

      var datosEnviar = {
        codigo:this.tratamiento.codigo,
        nombre: this.tratamiento.nombre,
        descripcion: this.tratamiento.descripcion,
        precio: this.tratamiento.precio,
        duracion: this.tratamiento.duracion
               

      };

      console.log(datosEnviar);
      /* let datos = JSON.stringify(datosEnviar);
            console.log(datos); */
      await fetch("http://localhost:8000/api/provincias", {
        method: "POST"})
        .then((res) => res.json())
        .catch((error) => console.error("Error", error))
        .then((response) => console.log("Success", response));

      window.location.href = "listar-tratamientos";
    },
  },
};

/*
 */
</script>

<style>
</style>


