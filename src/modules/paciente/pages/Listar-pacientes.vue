<template>
 <header>
    <div class="wrapper">
      <h1>Listado de Pacientes</h1>

      <RouterLink to="/nuevo-paciente">
        <button type="button" class="btn btn-info">Nuevo paceinte</button>
      </RouterLink>

      <RouterLink to="/home-page">
        <button type="button" class="btn btn-secondary">volver</button>
      </RouterLink>

      <nav>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Dni</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>

              <th scope="col">Telefono</th>
              <th scope="col">Domicilio</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="paciente in pacientes"
              :key="paciente.codigo"
            >
              <td scope="row">{{ paciente?.dni }}</td>
              <td>{{ paciente.nombre }}</td>
              <td>{{ paciente.apellido }}</td>
              <td>{{ paciente.telefono }}</td>
              <td>{{ paciente.calle }},{{paciente.localidad}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  v-on:click="esEditar(paciente.dni)"
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
      pacientes: [],
    };
  },
  mounted() {
    this.consultarPacientes();
  },
  methods:{
    
    consultarPacientes() {
      fetch("http://localhost:4000/api/pacientes")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.pacientes = [];
          if (typeof datosRespuesta[0].success === "undefined") {
            this.pacientes = datosRespuesta;
          }
        })
        .catch(console.log);
    },
    esEditar(id) {
      this.$router.push(`/editar-pacientes/${id}`);
    },

    borraRegistro(id) {
      fetch("http://localhost:4000/api/pacientes/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((dataRes) => {
          console.log(dataRes);
        })
        .catch(console.log)

      alert("paciente eliminado")
      location.reload()
    },
  }

}
</script>

<style>

</style>