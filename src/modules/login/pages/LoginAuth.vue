<template>
 <section class="principal">
    <div class="menu">
      <h1>Sistema de Gestión<br>Odontológica</h1>
      <h3>BIENVENIDO</h3>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Direccion de mail</label>
          <input type="email" class="btn-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion de email">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input type="password" class="btn-primary" id="exampleInputPassword1" placeholder="Contraseña">
        </div>
        
        <RouterLink to="/home-page"><button type="submit" class="btn-acento">Ingresar</button></RouterLink>
      </form>
    </div>

  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.principal {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/fondo.png");
  background-size: cover;
  background-position: center;

}

.principal .menu {
  width: 43%;
  padding: 2% 0%;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  margin-left: 199px;
  background: rgba(0, 0, 0, 0.51);
  line-height: 0;
}

h1 {

  font-style: italic;
  font-weight: 900;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: 0.16px;
  color: #ffff;
}

.menu h3 {
  font-style: normal;
  font-weight: 500;
  line-height: 53px;
  font-size: 45px;
  margin-top: 10%;
  margin-bottom: 10%;
  padding: 10% 0% 10% 0%;
  box-sizing: border-box;
  color: #9FF2F5;
  letter-spacing: 0.16px;
}
.btn-acento {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #FAD8D6;
  text-transform: uppercase;
  background-color: #EE596D;
  height: 67px;
  width: 409px;
  border-radius: 40px;
  border: none;
  margin: 5% 0% 10% 0%;
  cursor: pointer;
  transition: all 1s ease;

}

.btn-primary {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #FAD8D6;
  text-transform: uppercase;
  background-color: #00A6D0;
  height: 67px;
  width: 409px;
  border-radius: 40px;
  border: none;
  margin: 5% 0% 10% 0%;
  cursor: pointer;
  transition: all 1s ease;
}

.btn-primary:hover {
  background-color: #00002E;
}

.btn-acento:hover {
  background-color: #847996;
}
.mb-3{
  display: flex;
    align-items: center;
    flex-direction: column;
}
.menu .mb-3 .btn-primary {
  font-size: 20px;
  text-transform: capitalize;
  height: 48px;
  width: 272px;
  border-radius: 30px;
  padding-left: 27px;
}
</style>
