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
          placeholder="Descripcion"
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
        <RouterLink to="/listar-tratamientos">
          <button type="button" class="btn btn-secondary">
            cancelar
          </button></RouterLink
        >
      </div>
    </form>
  </div>
</template>

<script>
import {} from "@/modules/tratamiento/pages/Listar-tratamientos.vue";
export default {
  name: "Nuevo-tratamiento",

  data() {
    return {
      tratamiento: {},
    };
  },
  methods: {
    async agregarRegistro() {
      console.log(this.tratamiento);

      var datosEnviar = {
        codigo: this.tratamiento.codigo,
        nombre: this.tratamiento.nombre,
        descripcion: this.tratamiento.descripcion,
        precio: this.tratamiento.precio,
        duracion: this.tratamiento.duracion,
      };

      console.log(datosEnviar);

      await fetch("http://localhost:4000/api/tratamientos", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error", error))
        .then((response) => console.log("Success", response));

      alert("tratamiento registrado");
      this.$router.push("/listar-tratamientos");
    },
  },
};
</script>

<style>
</style>


