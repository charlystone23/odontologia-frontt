<template>
<br><br>

  <header class="color-fondo">
    <div class="wrapper">
      <h1>Tratamientos de:{{ paciente.nombre }} {{ paciente.apellido }}</h1>
<br>

      <button
        type="button"
        class="botones" style="background:#5cb85c
"
        v-on:click="nuevoTP(paciente.dni)"
      >
        Nuevo tratamiento
      </button>

   
<br>
      <nav>
        <table class="table table-dark table-sm">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha de inicio</th>
              <th scope="col">Medicacion</th>
              <th scope="col">Visitas Estimadas</th>
              <th scope="col">Estado</th>
              <th scope="col"></th>
              <th scope="col"></th>
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
                  class="botonesC" style="background:#f0ad4e
 "
                  v-on:click="esEditar(pacTrat.dni, pacTrat._id)"
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="botonesC"  style="background:#d9534f
"
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
       <button
        type="button"
        class="botones" style="background:grey"
        v-on:click="volver(paciente.dni)"
      >
        Volver
      </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      paciente: [],
      pacienteTratamiento: [],
    };
  },
  mounted() {
    this.consultarTratamientos();
    this.obtenerInfo();
  },
  methods: {
    //OBTENER PACIENTE TRATAMIENTO
    consultarTratamientos() {
      fetch(
        "https://server-dientito-cs23.onrender.com/api/pacientetratamiento/" +
          this.$route.params.id,
        {
          method: "GET",
        }
      )
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
      fetch("https://server-dientito-cs23.onrender.com/api/pacientes/" + this.$route.params.id, {
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

      fetch("https://server-dientito-cs23.onrender.com/api/pacientetratamiento/" + codigo, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((dataRes) => {
          console.log(dataRes);
        })
        .catch(console.log);

      location.reload();
      this.$toast.error(
        "¡Se ha ELIMINADO el trtamiento del paciente EXITOSAMENTE!"
      );
    },
  },
};
</script>

<style>
</style>