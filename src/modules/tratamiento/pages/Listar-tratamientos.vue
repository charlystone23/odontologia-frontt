<template>
  <header>
    <div class="wrapper">
      <h1>TRATAMIENTOS</h1>

      <RouterLink to="/nuevo-tratamiento">
        <button type="button" class="btn btn-info">Nuevo tratamiento</button>
      </RouterLink>

      <RouterLink to="/home-page">
        <button type="button" class="btn btn-secondary">volver</button>
      </RouterLink>

      <nav>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>

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
              <td>{{ tratamiento.descripcion }}</td>
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
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="borraRegistro(tratamiento.codigo)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>


      
    </div>
  </header>


  
</template>

<script>
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

    borraRegistro(id) {
      fetch("http://localhost:4000/api/tratamientos/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((dataRes) => {
          console.log(dataRes);
        })
        .catch(console.log)

      location.reload()
                        this.$toast.error('¡Se ha ELIMINADO el tratamiento EXITOSAMENTE!');

    },
  },
};
</script>

<style>
</style>