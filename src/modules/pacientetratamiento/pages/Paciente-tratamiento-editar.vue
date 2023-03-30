<template>
  <div class="color-fondo">
    <h1>Editar Tratamiento del paciente</h1>
    <div class="formulario" style="margin-left: 500px">

      <form class="col-5" v-on:submit.prevent="modificarRegistro">
        <br><br>
        <h2>Tratamiento:{{ tratamientoPaciente.nombre }}</h2>
        <br>
        <h3>Fecha de Inicio:{{ tratamientoPaciente.finicio }}</h3>

       <br><br>

        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            v-model="tratamientoPaciente.medicacion"
            id="medicacion"
            name="medicacion"
            placeholder="Medicacion"
            required
          />
          <small id="helpId" class="minit">Medicacion recomendada</small>
        </div>

        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            v-model="tratamientoPaciente.visitas"
            id="visitas"
            name="visitas"
            placeholder="Visitas estimadas"
            required
          />
          <small id="helpId" class="minit"
            >Visitas estiamdas para tratamiento</small
          >
        </div>

        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            v-model="tratamientoPaciente.estado"
            id="estado"
            name="estado"
            placeholder="Estado"
            required
          />
          <small id="helpId" class="minit">Estado del tratamiento</small>
        </div>

        <div>
          <button
            type="submit"
            class="botonesC"
            style="background: #f0ad4e; margin: 10px"
          >
            Actualizar
          </button>

          <button
            type="button"
            class="botonesC"
            style="background: grey; margin: 10px"
            v-on:click="volver(id)"
          >
            cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nuevo-tratamiento",
  data() {
    return {
      tratamientoPaciente: [],
      tratamientos: [],
      pacienteT: [],
    };
  },
  created() {
    this.consultarTratamientos();
    this.obtenerInfo();
  },
  methods: {
    obtenerInfo() {
      console.log(this.$route.params);
      console.log(this.$route.params.id);
      console.log("asd");
      console.log(this.$route.params.idT);
      fetch(
        "https://server-dientito-cs23.onrender.com/api/pacientetratamiento/" +
          this.$route.params.id +
          "/" +
          this.$route.params.idT,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((dataRes) => {
          console.log(dataRes);
          this.tratamientoPaciente = dataRes;
          console.log(55);
          console.log(this.tratamientoPaciente);
        })
        .catch(console.log);
    },
    async modificarRegistro() {
      console.log(this.$route.params);
      console.log(this.$route.params.id);
      console.log("asd");
      console.log(this.$route.params.idT);
      console.log(this.tratamientos.codigo);
      var datosEnviar = {
        dni: this.$route.params.id,
        nombre: this.tratamientoPaciente.nombre,
        finicio: this.tratamientoPaciente.finicio,
        medicacion: this.tratamientoPaciente.medicacion,
        visitas: this.tratamientoPaciente.visitas,
        estado: this.tratamientoPaciente.estado,
      };
      console.log(datosEnviar);
      let datos = JSON.stringify(datosEnviar);
      await fetch(
        "https://server-dientito-cs23.onrender.com/api/pacientetratamiento/" +
          this.$route.params.id +
          "/" +
          this.$route.params.idT,
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
        .then((response) => {
          console.log("Success", response);
        });
      this.$router.push(
        `/paciente-tratamiento-listar/${this.$route.params.id}`
      );
      this.$toast.warning(
        "¡Se ha ACTUALIZADO el paciente de forma EXITOSAMENTE!"
      );
    },

    // Obtengo los tratamientos
    consultarTratamientos() {
      fetch("https://server-dientito-cs23.onrender.com/api/tratamientos")
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
    volver(id) {
      id = this.$route.params.id;
      this.$router.push(`/paciente-tratamiento-listar/${id}`);
    },
  },
};
</script>

<style>
</style>