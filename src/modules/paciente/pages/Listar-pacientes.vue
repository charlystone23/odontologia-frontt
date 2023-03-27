<template>
 <header>
    <div class="wrapper">
      <h1>Listado de Pacientes</h1>

      <RouterLink to="/nuevo-paciente">
        <button type="button" class="btn btn-info">Nuevo paciente</button>
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
                  v-on:click="borraRegistro(paciente.dni)"
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
.btn-acento {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    color: #FAD8D6;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.25px;
    background-color: #EE596D;
    width: 409px;
    height: 194px;
    border-radius: 40px;
    border: none;
    margin: 2% 0% 2% 0%;
    cursor: pointer;
    transition: all 1s ease;    
}
.btn-desabilitado {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    color: #FAD8D6;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #b6b6b6;
    width: 409px;
    height: 194px;
    border-radius: 40px;
    border: none;
    margin: 2% 0% 2% 0%;
    cursor: pointer;
    transition: all 1s ease;
}


.btn-secondary {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #00002E;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #FAD8D6;
    width: 409px;
    height: 67px;
    border-radius: 40px;
    border: none;
    margin: 5% 0% 5% 0%;
    cursor: pointer;
    margin: 5% 0% 5% 0%;
    cursor: pointer;
    transition: all 1s ease;
}

.btn-primary:hover {
    background-color: #00002E;
}

.btn-acento:hover {
    background-color: #847996;
}


</style>