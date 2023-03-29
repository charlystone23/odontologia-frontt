<template>
  

  <header>
    <div class="wrapper">
      <h1>Tratamientos de:{{ paciente.nombre }} {{ paciente.apellido }}</h1>

      
        <button 
        type="button" 
        class="btn btn-info"
        v-on:click="nuevoTP(paciente.dni)">Nuevo tratamiento</button>
      

      
        <button 
        type="button" 
        class="btn btn-secondary"
        v-on:click="volver(paciente.dni)">volver</button>
      

      <nav>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha de inicio</th>
              <th scope="col">Medicacion</th>
              <th scope="col">Visitas Estimadas</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="pacTrat in pacienteTratamiento"
              :key="pacTrat.dni"
            >
              <td scope="row">{{ pacTrat?.nombre }}</td>
              <td>{{ pacTrat.finicio }}</td>
              <td>{{ pacTrat.medicacion }}</td>
              <td>{{ pacTrat.visitas }}</td>
              <td>{{ pacTrat.estado }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  v-on:click="esEditar(pacTrat.dni, pacTrat._id)"
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="borraRegistro(pacTrat._id)"
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
      paciente: [],
      pacienteTratamiento:[]
    };
  },
  mounted() {
    this.consultarTratamientos();
    this.obtenerInfo();
  },
  methods: {
    //OBTENER PACIENTE TRATAMIENTO
  consultarTratamientos() {
      fetch("http://localhost:4000/api/pacientetratamiento/" + this.$route.params.id, {
        method: "GET",
      })
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          /* this.pacienteTratamiento = []; */
          if (typeof datosRespuesta[0].success === "undefined") {
            
            this.pacienteTratamiento = datosRespuesta;
            console.log(datosRespuesta);
          }
        })
        .catch(console.log);
    },
   esEditar(id, idtratamiento) {
      this.$router.push(`/paciente-tratamiento-editar/${id}/${idtratamiento}`);
    },
    nuevoTP(id) {
      this.$router.push(`/paciente-tratamiento-crear/${id}`);
    },

    //OBTENER EL PACIENTE
   obtenerInfo() {
      fetch("http://localhost:4000/api/pacientes/" + this.$route.params.id, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((dataRes) => {
          console.log(dataRes);
          this.paciente = dataRes;
        })
        .catch(console.log);
    },
    //ir a atras mandando el id
    volver(id) {
      this.$router.push(`/paciente-tratamiento/${id}`);
    },

    borraRegistro(codigo) {
      console.log(codigo);

      fetch("http://localhost:4000/api/pacientetratamiento/" + codigo, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((dataRes) => {
          console.log(dataRes);
        })
        .catch(console.log);

      alert("tratamiento eliminado");
      location.reload(); 
    },
  },
};
</script>

<style>
</style>