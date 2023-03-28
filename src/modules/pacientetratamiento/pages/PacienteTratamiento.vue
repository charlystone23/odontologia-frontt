<template>
  <h1>Paciente:{{ paciente.nombre }} {{ paciente.apellido }}</h1>

  <button type="button" 
  class="btn btn-primary"
   v-on:click="listadoTP(paciente.dni)">
    Tratamientos del paciente
  </button>
  <button type="button" class="btn btn-secondary">Odontograma</button>
  <button type="button" class="btn btn-success">Agenda</button>

  <RouterLink to="/listar-pacientes">
    <button type="button" class="btn btn-secondary">Volver</button></RouterLink
  >

  

</template>

<script>
export default {
  data() {
    return {
      paciente: {},
    };
  },

  mounted: function () {
    this.obtenerInfo();
  },
  methods: {
    obtenerInfo() {
      console.log(this.$route.params);

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
     listadoTP(id) {
      this.$router.push(`/paciente-tratamiento-listar/${id}`);
    },
  },
};
</script>

<style>
</style>