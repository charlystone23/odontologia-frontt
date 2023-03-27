<template>
  <div class="flex-container">
    <div class="contenido-header">
      <nav class="nav">
        <ul id="links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#tratamientos">Tratamientos</a></li>
          <li><a href="paciente.html">Pacientes</a></li>
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
        <a href="" class="btn-acento">+</a>
      </div>

      <div class="main-container">


        <h1>Nuevo Paciente</h1>

        <div class="titulo">DATOS PERSONALES</div>
        <div class="contenedor-datos">
        <div class="formulario" style="margin-left: 500px">
          <form class="col-5" v-on:submit.prevent="agregarRegistro">
            <div class="mb-3">
              <input type="number" class="form-control" v-model="paciente.dni" id="dni" name="dni" placeholder="Dni"
                required />
              <small id="helpId" class="form-text text-muted">Dni del paciente</small>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" v-model="paciente.nombre" id="nombre" name="nombre"
                placeholder="Nombre" required />
              <small id="helpId" class="form-text text-muted">Nombre del paciente</small>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" v-model="paciente.apellido" id="apellido" name="apellido"
                placeholder="Apellido" required />
              <small id="helpId" class="form-text text-muted">Apellido del Paciente</small>
            </div>

            <div class="mb-3">
              <input type="number" class="form-control" v-model="paciente.telefono" id="telefono" name="telefono"
                placeholder="Telefono" required />
              <small id="helpId" class="form-text text-muted">Telefono del paciente</small>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" v-model="paciente.fnac" id="fnac" name="fnac"
                placeholder="Fecha de nacimiento" required />
              <small id="helpId" class="form-text text-muted">Formato: DD/MM/AA</small>
            </div>


            <div class="mb-3">
              <input type="text" class="form-control" v-model="paciente.calle" id="calle" name="calle" placeholder="Calle"
                required />
              <small id="helpId" class="form-text text-muted">Calle</small>
            </div>


            <div class="mb-3">
              <input type="text" class="form-control" v-model="paciente.localidad" id="localidad" name="localidad"
                placeholder="Localidad" required />
              <small id="helpId" class="form-text text-muted">Localidad</small>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" v-model="paciente.provincia" id="provincia" name="provincia"
                placeholder="Provincia" required />
              <small id="helpId" class="form-text text-muted">Provincia</small>
            </div>
          </form>
        </div>
        </div>
        
         <div class="menu-izq">
            <button type="submit" class="btn-acento">Registrar</button>
            <RouterLink to="/listar-pacientes">
              <button type="button" class="btn-secundary">Cancelar</button>
            </RouterLink>
          </div>
        </div>
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
  methods: {
    async agregarRegistro() {
      console.log(this.tratamiento);

      var datosEnviar = {
        dni: this.paciente.dni,
        nombre: this.paciente.nombre,
        apellido: this.paciente.apellido,
        telefono: this.paciente.telefono,
        fnac: this.paciente.fnac,
        calle:this.paciente.calle,
        localidad: this.paciente.localidad,
        provincia: this.paciente.provincia
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

      alert("pacientes registrado");
      this.$router.push("/listar-pacientes");
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
  width: 100%;
  height: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
}

.main {
  width: 100%;
  height: 100vh;
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

.sidebar a {
  display: flex;
  align-items: center;
  justify-content: center;
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


.btn-secundary {
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