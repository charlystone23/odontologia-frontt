<template>
  <h1>Editar Tratamientos</h1>

  <div class="formulario" style="margin-left: 500px">
    <form class="col-5" v-on:submit.prevent="actualizarRegistro">
      <div class="mb-3">
        <h4>Codigo: {{ this.$route.params.id }}</h4>
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
        <button type="submit" class="btn btn-warning">Actualizar</button>
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
export default {
  data() {
    return {
      tratamiento: [],
    };
  },

  created: function () {
    this.obtenerInfo();
  },
  methods: {
    obtenerInfo() {
      console.log(this.$route.params);

      fetch("http://localhost:4000/api/tratamientos/" + this.$route.params.id, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((dataRes) => {
          console.log(dataRes);
          this.tratamiento = dataRes;
        })
        .catch(console.log);
    },

    async actualizarRegistro() {
      console.log(this.tratamiento);
      var datosEnviar = {
        codigo: this.$route.params.codigo,
        nombre: this.tratamiento.nombre,
        descripcion: this.tratamiento.descripcion,
        precio: this.tratamiento.precio,
        duracion: this.tratamiento.duracion,
      };
      console.log(datosEnviar);
      let datos = JSON.stringify(datosEnviar);
      console.log(datos);
      console.log(this.$route.params.id);
      await fetch(
        "http://localhost:4000/api/tratamientos/" + this.$route.params.id,
        {
          method: "PUT",
          body: datos,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .catch((error) => console.error("Error", error))
        .then((response) => console.log("Success", response));
      this.$router.push(`/listar-tratamientos`);
                        this.$toast.warning('¡Se ha ACTUALIZADO el tratamiento EXITOSAMENTE!');

    },
  },
};
</script>

<style>
</style>