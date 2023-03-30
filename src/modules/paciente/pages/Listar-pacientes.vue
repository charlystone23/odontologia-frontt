<template>
  <header class="color-fondo">
    <div class="wrapper">
      <br /><br />
      <h1>Listado de Pacientes</h1>

      <RouterLink to="/nuevo-paciente">
        <button type="button" class="botones" style="background: #5cb85c">
          Nuevo Paciente
        </button>
      </RouterLink>

      <div class="container">
        <div class="row">
          <div>
            <table class="table mt-4 table-dark table-sm">
              <thead>
                <tr>
                  <th scope="col">Dni</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>

                  <th scope="col">Telefono</th>
                  <th scope="col">Domicilio</th>
                  <th scope="col"> Acciones </th>
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
                  <td>{{ paciente.calle }},{{ paciente.localidad }}</td>
                  <td>
                    <button
                      type="button"
                      class="botonesC"
                      v-on:click="gestionPaciente(paciente.dni)"
                      style="background: #5bc0de"
                    >
                      Gestion
                    </button>
                    <button
                      type="button"
                      class="botonesC"
                      style="background: #f0ad4e"
                      v-on:click="esEditar(paciente.dni)"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      class="botonesC"
                      v-on:click="deleteItem(paciente.dni)"
                      style="background: #d9534f"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <borrado-modal
    :title="'Borrado de Paciente'"
    :message="'¿Estas seguro que quieres borrar este paciente?'"
    v-if="showModal"
    @close-modal="closeModal"
    @delete-item="confirmDelete(id)"
    ref="BorradoModal"></borrado-modal>

    <RouterLink to="/home-page">
      <button type="button" class="botones" style="background: grey">
        Volver
      </button>
    </RouterLink>
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
      pacientes: [],
      showModal: false,
    };
  },

  mounted() {
    this.consultarPacientes();
  },

  methods: {
    consultarPacientes() {
      fetch("https://server-dientito-cs23.onrender.com/api/pacientes")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.pacientes = [];
          if (typeof datosRespuesta[0].success === 'undefined') {
            this.pacientes = datosRespuesta;
          }
        })
        .catch(console.log);
    },

    esEditar(id) {
      this.$router.push(`/editar-pacientes/${id}`);
    },
    gestionPaciente(id) {
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
          `https://server-dientito-cs23.onrender.com/api/pacientes/${id}`,
          {
            method: 'DELETE',
          }
        );
        if (res.ok) {
          this.$toast.error('¡Se ha ELIMINADO el paciente EXITOSAMENTE!');
          this.consultarPacientes();
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
