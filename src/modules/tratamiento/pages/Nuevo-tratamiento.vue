<template>
  <br /><br />
  <h1>Nuevo Tratamiento</h1>
  <br /><br />
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
        <small id="helpId" class="minit">Codigo de Tratamiento</small>
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
        <small id="helpId" class="minit">Nombre del tratamiento</small>
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
        <small id="helpId" class="minit">Descripcion del tratamiento</small>
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
        <small id="helpId" class="minit">Precio del tratamiento</small>
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
        <small id="helpId" class="minit">Duracion del tratamiento</small>
      </div>

      <div>
        <button
          type="submit"
          class="botonesC"
          style="background: #5cb85c; margin: 10px"
        >
          Agregar
        </button>
        <RouterLink to="/listar-tratamientos">
          <button
            type="button"
            class="botonesC"
            style="background: grey; margin: 10px"
          >
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

      this.$router.push("/listar-tratamientos");
      this.$toast.success("¡Se ha CREADO el tratamiento EXITOSAMENTE!");
    },
  },
};
</script>

<style>
</style>


