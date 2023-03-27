<template>
  <div class="flex-container">
    <div class="contenido-header">
      <nav class="nav">
        <ul id="links">

          <li><router-link to="home-page">Inicio</router-link></li>
          <li><router-link to="listar-tratamientos">Tratamientos</router-link></li>

          <li><router-link to="listar-pacientes">Pacientes</router-link></li>

        </ul>
      </nav>
      <nav class="nav2">
        <div class="buscar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>Buscar</h3>
        </div>
        <div class="icono-nav">
          <i class="fa-solid fa-circle-user"></i>
        </div>
      </nav>
    </div>
    <div class="main">

      <div class="sidebar">
      </div>

      <div class="main-container">

        <h1>Nuevo Tratamiento</h1>
        <div class="titulo"></div>
        <div class="contenedor-datos">


          <div class="formulario" style="margin-left: 500px">
            <form class="col-5" v-on:submit.prevent="agregarRegistro">
              <div class="mb-3">
                <input type="number" class="form-control" v-model="tratamiento.codigo" id="codigo" name="codigo"
                  placeholder="Codigo" required />
                <small id="helpId" class="form-text text-muted">Codigo de Tratamiento</small>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" v-model="tratamiento.nombre" id="nombre" name="nombre"
                  placeholder="Nombre" required />
                <small id="helpId" class="form-text text-muted">Nombre del tratamiento</small>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" v-model="tratamiento.descripcion" id="descripcion"
                  name="descripcion" placeholder="Descripcion" required />
                <small id="helpId" class="form-text text-muted">Descripcion del tratamiento</small>
              </div>

              <div class="mb-3">
                <input type="number" class="form-control" v-model="tratamiento.precio" id="precio" name="precio"
                  placeholder="Precio" required />
                <small id="helpId" class="form-text text-muted">Precio del tratamiento</small>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" v-model="tratamiento.duracion" id="duracion" name="duracion"
                  placeholder="Duracion" required />
                <small id="helpId" class="form-text text-muted">Duracion del tratamiento</small>
              </div>

            </form>
          </div>
        </div>

        <div class="menu-izq">

          <button type="submit" class="btn-acento">Agregar</button>
          <RouterLink to="/listar-tratamientos">
            <button type="button" class="btn-secondary">Cancelar</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { } from "@/modules/tratamiento/pages/Listar-tratamientos.vue";
export default {
  name: "Nuevo-tratamiento",

  data() {
    return {
      tratamiento: {},
    };
  },
  methods: {
    async agregarRegistro() {
      console.log(this.tratamiento);

      var datosEnviar = {
        codigo: this.tratamiento.codigo,
        nombre: this.tratamiento.nombre,
        descripcion: this.tratamiento.descripcion,
        precio: this.tratamiento.precio,
        duracion: this.tratamiento.duracion,
      };

      console.log(datosEnviar);

      await fetch("http://localhost:4000/api/tratamientos", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error", error))
        .then((response) => console.log("Success", response));

      alert("tratamiento registrado");
      this.$router.push("/listar-tratamientos");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Roboto;
}

html {
  height: 100%;
}

.flex-container {
  display: flex;
  background-color: #00A6D0;
  flex-flow: row wrap;
  text-align: center;
}

.contenido-header {

  background-color: #FAD8D6;
  color: black;
  width: 100%;
  height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
}

.main {
  width: 100%;
  background-image: url("../../../assets/image27.png");
  background-size: cover;
  display: flex;
}

.main-container {
  width: 100%;
  display: flex;

  justify-content: space-between;
  flex-direction: column;


}
.main .sidebar {
  background: #FAD8D6;
  display: flex;
}


.main .main-container .menu-izq a {
  display: flex;
  align-items: center;
  justify-content: center;

}

.menu-izq {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
}

.titulo {
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.56px;
  margin-left: 64px;
  margin-top: 60px;
  text-align: initial;
}

.contenedor-datos {
  display: flex;

  flex-direction: column;

}

.datos {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
}

.datos_fecha .col1 {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 92px;
}

.datos_domicilio .col1 {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 92px;
}

.col1 {

  display: flex;
  flex-direction: column;
  margin-left: 92px;
}

.col2 {

  display: flex;
  flex-direction: column;
  margin-right: 312px
}

.contenido-header nav ul {
  list-style: none;
  display: flex;
  margin-left: 70px;
}

.contenido-header .nav2 {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.contenido-header nav ul li a {
  text-decoration: none;
  color: #00002E;
  margin: 0 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}

.nav2 #icono-nav {
  width: 50px;
  height: 50px;
}


.contenido-header .buscar {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #00002E;
  letter-spacing: 0.25px;
  background-color: #EE596D;
  width: 442px;
  height: 35px;
  border-radius: 48px;
  border: none;
  padding: 0px 16px 0px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.main .btn-acento {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #FAD8D6;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.25px;
  background-color: #EE596D;
  width: 409px;
  height: 67px;
  border-radius: 40px;
  border: none;
  margin: 2% 0% 2% 0%;
  cursor: pointer;
  transition: all 1s ease;
}

.contenedor-datos .btn-acento {
  height: 67px;
  padding: 0%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.sidebar .btn-acento {
  font-size: 36px;
  margin-top: 30px;
  width: 56px;
  height: 56px;
  border-radius: 16px;
}


.btn-secondary {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  color: #00002E;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #FAD8D6;
  width: 409px;
  height: 67px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
}


.btn-primary {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #00002E;
  text-transform: uppercase;
  background: #9FF2F5;
  height: 67px;
  width: 409px;
  border-radius: 40px;
  border: none;
  margin: 1% 0% 1% 0%;
  cursor: pointer;
  transition: all 1s ease;
}

.datos .btn-primary {
  font-size: 20px;
  text-transform: capitalize;
  height: 48px;
  width: 272px;
  border-radius: 30px;
  padding-left: 27px;
}

.datos_fecha .btn-primary {
  font-size: 20px;
  text-transform: capitalize;
  height: 48px;
  width: 89px;
  border-radius: 30px;
  padding-left: 27px;
  margin-right: 10px;
}

.datos_domicilio .btn-primary {
  font-size: 20px;
  text-transform: capitalize;
  height: 48px;
  width: 272px;
  border-radius: 30px;
  padding-left: 27px;
  margin-right: 70px;
}
</style>


