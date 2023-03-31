<template>
<div class="color-fondo">
  <h1>Editar Paciente</h1>

  <div class="formulario" style="margin-left: 500px">
    <form class="col-5" v-on:submit.prevent="actualizarRegistro">
      <div class="mb-3">
        <h4>DNI: {{ this.$route.params.id }}</h4>
      </div>

      
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="paciente.nombre"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          required
        />
        <small id="helpId" class="minit"
          >Nombre del paciente</small
        >
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="paciente.apellido"
          id="apellido"
          name="apellido"
          placeholder="Apellido"
          required
        />
        <small id="helpId" class="minit"
          >Apellido del Paciente</small
        >
      </div>

      <div class="mb-3">
        <input
          type="number"
          class="form-control"
          v-model="paciente.telefono"
          id="telefono"
          name="telefono"
          placeholder="Telefono"
          required
        />
        <small id="helpId" class="minit"
          >Telefono del paciente</small
        >
      </div>

      <div class="mb-3">
        <input
          type="date"
          class="form-control"
          v-model="paciente.fnac"
          id="fnac"
          name="fnac"
          placeholder="Fecha de nacimiento"
          required
        />
        <small id="helpId" class="minit"
          >Formato: DD/MM/AA</small
        >
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="paciente.calle"
          id="calle"
          name="calle"
          placeholder="Calle"
          required
        />
        <small id="helpId" class="minit">Calle</small>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="paciente.localidad"
          id="localidad"
          name="localidad"
          placeholder="Localidad"
          required
        />
        <small id="helpId" class="minit">Localidad</small>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="paciente.provincia"
          id="provincia"
          name="provincia"
          placeholder="Provincia"
          required
        />
        <small id="helpId" class="minit">Provincia</small>
      </div>




      <div>
        <button type="submit" class="botonesC" style="background: #f0ad4e ;margin:10px">Actualizar</button>
        <RouterLink to="/listar-pacientes">
          <button type="button" class="botonesC" style="background: grey ;margin:10px">
            cancelar
          </button></RouterLink
        >
      </div>
    </form>
  </div>
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

    async actualizarRegistro() {
      console.log(this.paciente);
     var datosEnviar = {
        dni: this.paciente.dni,
        nombre: this.paciente.nombre,
        apellido: this.paciente.apellido,
        telefono: this.paciente.telefono,
        fnac: (this.paciente.fnac.toString()),
        calle:this.paciente.calle,
        localidad: this.paciente.localidad,
        provincia: this.paciente.provincia
      };
      console.log(datosEnviar);
      let datos = JSON.stringify(datosEnviar);
      console.log(datos);
      console.log(this.$route.params.id);
      await fetch(
        "https://server-dientito-cs23.onrender.com/api/pacientes/" + this.$route.params.id,
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
      this.$router.push(`/listar-pacientes`);
            this.$toast.warning('¡Se ha ACTUALIZADO el paciente EXITOSAMENTE!');

    },
  },
};
</script>

<style>
</style>