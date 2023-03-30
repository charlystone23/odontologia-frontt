<template>
  <div class="color-fondo">
    <br /><br />
    <h1>Nuevo Tratamiento del paciente</h1>
    <br /><br />
    <div class="formulario" style="margin-left: 500px">
      <form class="col-5" v-on:submit.prevent="agregarRegistro">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="tratamientos.codigo"
        >
          <option
            attr.value="{{tratamiento.id}}"
            v-for="tratamiento in tratamientos"
            :key="tratamiento.id"
          >
            {{ tratamiento.nombre }}
          </option>
        </select>
        <small id="helpId" class="minit">Nombre del tratamiento</small>

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
          <small id="helpId" class="minit">Formato: DD/MM/AA</small>
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
          <button type="submit" class="botonesC"
            style="background: #5cb85c; margin: 10px" >Agregar</button>

          <button
            type="button"
            class="botonesC"
              style="background: grey; margin: 10px"
            v-on:click="volver(this.$route.params.id)"
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
      tratamientoPaciente: {},
      tratamientos: [],
    };
  },
  mounted() {
    this.consultarTratamientos();
  },
  methods: {
    async agregarRegistro() {
      //console.log(this.tratamiento);
      console.log(this.tratamientos.codigo);

      var datosEnviar = {
        dni: this.$route.params.id,
        nombre: this.tratamientos.codigo,
        finicio: this.tratamientoPaciente.finicio,
        medicacion: this.tratamientoPaciente.medicacion,
        visitas: this.tratamientoPaciente.visitas,
        estado: this.tratamientoPaciente.estado,
      };

      console.log(datosEnviar);

      await fetch("http://localhost:4000/api/pacientetratamiento", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error", error))
        .then((response) => console.log("Success", response));

      this.$router.push(`/paciente-tratamiento-listar/${datosEnviar.dni}`);
      this.$toast.success(
        "¡Se ha CREADO el trtamiento del paciente EXITOSAMENTE!"
      );
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
      this.$router.push(`/paciente-tratamiento-listar/${id}`);
    },
  },
};
</script>

<style>
</style>

