<template>
  <header class="color-fondo">
    <div class="wrapper">
      <br /><br />
      <h1>LISTADO DE TRATAMIENTOS</h1>
      <br /><br />
      <RouterLink to="/nuevo-tratamiento">
        <button type="button" class="botones">Nuevo tratamiento</button>
      </RouterLink>

      <br /><br />

      <nav>
        <table class="table table-dark table-sm">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>

              <th scope="col">Precio</th>
              <th scope="col">Duracion</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="tratamiento in tratamientos"
              :key="tratamiento.codigo"
            >
              <td scope="row">{{ tratamiento?.codigo }}</td>
              <td>{{ tratamiento.nombre }}</td>
              <td>{{ tratamiento.descripcion }}</td>
              <td>{{ tratamiento.precio }}</td>
              <td>{{ tratamiento.duracion }}</td>
              <td>
                <button
                  type="button"
                  class="botonesC"
                  style="background: #f0ad4e"
                  v-on:click="esEditar(tratamiento.codigo)"
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="botonesC"
                  v-on:click="deleteItem(tratamiento.codigo)"
                  style="background: #d9534f"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>

      <RouterLink to="/home-page">
        <button type="button" class="botones" style="background: grey">
          Volver
        </button>
      </RouterLink>

       <borrado-modal
      :title="'Borrado de Tratamiento de paciente'"
      :message="'¿Estas seguro que quieres borrar este Tratamiento?'"
      v-if="showModal"
      @close-modal="closeModal"
      @delete-item="confirmDelete(id)"
      ref="BorradoModal"
    ></borrado-modal>
    </div>
  </header>
</template>

<script>
import BorradoModal from '../../extras/BorradoModal.vue';

export default {
  
  components: {
    BorradoModal
  },

  data() {
    return {
      tratamientos: [],
      showModal: false,
    };
  },
  mounted() {
    this.consultarTratamientos();
  },
  methods: {
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
    esEditar(id) {
      this.$router.push(`/editar-tratamientos/${id}`);
    },
    deleteItem(id){
      this.showModal=true;
      this.id=id
    },
        closeModal() {
      this.showModal = false;
    },

    async confirmDelete(id) {
      try{
       const res = await fetch(
        `https://server-dientito-cs23.onrender.com/api/tratamientos/${id}` ,
        {
          method: "DELETE",
        }
      )
      if(res.ok){
        this.$toast.error('¡Se ha ELIMINADO el tratamiento EXITOSAMENTE!');
          this.consultarTratamientos();
      }
      }catch (err) {
        console.log('ERROR: ', err);
      }
      this.showModal = false;
    },
  },
};
</script>

