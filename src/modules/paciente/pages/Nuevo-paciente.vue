<template>
  <h1>Nuevo Paciente</h1>

  <div class="formulario" style="margin-left: 500px">
    <form class="col-5" v-on:submit.prevent="agregarRegistro">
      <div class="mb-3">
        <input
          type="number"
          class="form-control"
          v-model="paciente.dni"
          id="dni"
          name="dni"
          placeholder="Dni"
          required
        />
        <small id="helpId" class="form-text text-muted">Dni del paciente</small>
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
        <small id="helpId" class="form-text text-muted"
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
        <small id="helpId" class="form-text text-muted"
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
        <small id="helpId" class="form-text text-muted"
          >Telefono del paciente</small
        >
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="paciente.fnac"
          id="fnac"
          name="fnac"
          placeholder="Fecha de nacimiento"
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
          v-model="paciente.calle"
          id="calle"
          name="calle"
          placeholder="Calle"
          required
        />
        <small id="helpId" class="form-text text-muted">Calle</small>
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
        <small id="helpId" class="form-text text-muted">Localidad</small>
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
        <small id="helpId" class="form-text text-muted">Provincia</small>
      </div>

      <div>
        <button type="submit" class="btn btn-success">Registrar</button>
        <RouterLink to="/listar-pacientes">
          <button type="button" class="btn btn-light">Cancelar</button>
        </RouterLink>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      paciente: {},
    };
  },
  methods: {
    async agregarRegistro() {
      console.log(this.tratamiento);

      var datosEnviar = {
        dni: this.paciente.dni,
        nombre: this.paciente.nombre,
        apellido: this.paciente.apellido,
        telefono: this.paciente.telefono,
        fnac: this.paciente.fnac,
        calle: this.paciente.calle,
        localidad: this.paciente.localidad,
        provincia: this.paciente.provincia,
      };

      console.log(datosEnviar);

      await fetch("http://localhost:4000/api/pacientes", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error", error))
        .then((response) => console.log("Success", response));

      this.$router.push("/listar-pacientes");
      this.$toast.success('¡Se ha AGREGADO el paciente EXITOSAMENTE!');

    },
  },
};
</script>


<style>
</style>