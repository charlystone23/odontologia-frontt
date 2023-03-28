<template>
  <h1>Editar Tratamiento del paciente</h1>
  <div class="formulario" style="margin-left: 500px">
    <form class="col-5" v-on:submit.prevent="modificarRegistro">
      <h2>Nombre del tratamiento:{{ tratamientoPaciente.nombre }}</h2>
      <!-- <select class="form-select" aria-label="Default select example" v-model="tratamientos.codigo">
  <option attr.value="{{tratamiento.id}}" v-for="tratamiento in tratamientos" :key="tratamiento.id">{{tratamiento.nombre}}</option>
</select> -->
      <!-- <small id="helpId" class="form-text text-muted"
          >Nombre del tratamiento</small
        >
 -->

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="tratamientoPaciente.finicio"
          id="finicio"
          name="finicio"
          placeholder="Fecha de inicio"
          required
        />
        <small id="helpId" class="form-text text-muted"
          >Formato: DD/MM/AA</small
        >
      </div>

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
        <small id="helpId" class="form-text text-muted"
          >Medicacion recomendada</small
        >
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
        <small id="helpId" class="form-text text-muted"
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
        <small id="helpId" class="form-text text-muted"
          >Estado del tratamiento</small
        >
      </div>

      <div>
        <button type="submit" class="btn btn-warning">Actualizar</button>

        <button
          type="button"
          class="btn btn-secondary"
          v-on:click="volver(id)"
        >
          cancelar
        </button>
      </div>
    </form>
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
      console.log(this.$route.params.idtratamiento);
      fetch(
        "http://localhost:4000/api/pacientetratamiento/" +
          this.$route.params.id +
          "/" +
          this.$route.params.idtratamiento,
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
      //console.log(this.tratamiento);
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
        "http://localhost:4000/api/pacientetratamiento" +
          this.$route.params.idtratamiento,
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

      alert("tratamiento del paciente actualizado");
      this.$router.push(`/paciente-tratamiento-listar/${this.route.params.id}`);
    },

   
    // Obtengo los tratamientos
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

    volver(id) {
        id=this.$route.params.id
      this.$router.push(`/paciente-tratamiento-listar/${id}`);
    },
  },
};
</script>

<style>
</style>

