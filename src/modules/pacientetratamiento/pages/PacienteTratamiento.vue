<template>
  <div class="color-fondo">
    <br /><br />
    <h1>Paciente:{{ paciente.nombre }} {{ paciente.apellido }}</h1>

    <button type="button" class="botonesG" v-on:click="listadoTP(paciente.dni)">
      Tratamientos del paciente
    </button>
    <br />
    <button type="button" class="botonesG" style="background: #292b2c">
      Odontograma
    </button>

    <br /><br />
    <RouterLink to="/listar-pacientes">
      <button type="button" class="botonesG" style="background: grey">
        Volver
      </button></RouterLink
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      paciente: {},
    };
  },

  created: function () {
    this.obtenerInfo();
  },
  methods: {
    obtenerInfo() {
      console.log(this.$route.params);

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
    listadoTP(id) {
      this.$router.push(`/paciente-tratamiento-listar/${id}`);
    },
  },
};
</script>

<style>
</style>