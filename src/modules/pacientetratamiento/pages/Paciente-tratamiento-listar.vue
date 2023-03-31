<template>
  <br /><br />

  <header class="color-fondo">
    <div class="wrapper">
      <h1>
        Tratamientos de:{{ paciente.nombre }} {{ paciente.apellido }}
      </h1>
      <br />

      <button
        type="button"
        class="botones"
        style="background: #5cb85c"
        v-on:click="nuevoTP(paciente.dni)"
      >
        Nuevo tratamiento
      </button>

      <br />
      <nav>
        <h1 class="text-center" v-if="!pacienteTratamiento.length"> 
              Este paciente no tiene tratamientos. <p>Puede agreguar alguno.</p>
        </h1>
        <table class="table table-dark table-sm" v-if="pacienteTratamiento.length >= 1">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha de inicio</th>
              <th scope="col">Medicacion</th>
              <th scope="col">Visitas Estimadas</th>
              <th scope="col">Estado</th>
              <th> Acciones </th>
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
                  class="botonesC"
                  style="background: #f0ad4e"
                  v-on:click="esEditar(pacTrat.dni, pacTrat._id)"
                >
                  Editar
                </button>
                <button
                  type="button"
                  class="botonesC"
                  style="background: #d9534f"
                  v-on:click="deleteItem(pacTrat._id)"
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
      class="botones"
      style="background: grey"
      v-on:click="volver(paciente.dni)"
    >
      Volver
    </button>
        
    <borrado-modal
      :title="'Borrado de Tratamiento de paciente'"
      :message="'¿Estas seguro que quieres borrar este Tratamiento para este Paciente?'"
      v-if="showModal"
      @close-modal="closeModal"
      @delete-item="confirmDelete(id)"
      ref="BorradoModal"
    ></borrado-modal>
  </header>
</template>

<script>
import BorradoModal from '../../extras/BorradoModal.vue';

export default {
  components: {
    BorradoModal,
  },

  data() {
    return {
      paciente: [],
      pacienteTratamiento: [],
      showModal: false,
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
        'https://server-dientito-cs23.onrender.com/api/pacientetratamiento/' +
          this.$route.params.id,
        {
          method: 'GET',
        }
      )
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          /* this.pacienteTratamiento = []; */
          this.pacienteTratamiento = datosRespuesta;
          console.log(datosRespuesta);
        })
        .catch(console.log);
    },

    esEditar(id, idtratamiento) {
      this.$router.push(
        `/paciente-tratamiento-editar/${id}/${idtratamiento}`
      );
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

    deleteItem(id) {
      this.showModal = true;
      this.id = id;
    },

    closeModal() {
      this.showModal = false;
    },

    async confirmDelete(id) {
      try {
        const res = await fetch(
          `https://server-dientito-cs23.onrender.com/api/pacientetratamiento/${id}`,
          {
            method: 'DELETE',
          }
        );
        if (res.ok) {
          this.$toast.error(
            '¡Se ha ELIMINADO el tratamiento del paciente EXITOSAMENTE!'
          );
          this.consultarTratamientos();
        }
      } catch (err) {
        console.log('ERROR: ', err);
      }
      this.showModal = false;
    },
  },
};
</script>

<style></style>
