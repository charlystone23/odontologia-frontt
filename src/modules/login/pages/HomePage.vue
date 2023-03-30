<template>

<div class="color-fondo">
  <br><br>
  <h1>BIENVENIDO</h1>
<br><br><br>
  <RouterLink to="/listar-pacientes"> <button type="button" class="botonesG ">Pacientes</button></RouterLink>
  <RouterLink to="/listar-tratamientos"><button type="button" class="botonesG " style="background:#292b2c">Tratamientos</button></RouterLink>
<!-- 
<button type="button" class="btn btn-dark">Agenda</button> -->


<br><br><br>
  <RouterLink to="/login"><button type="button" class="botones" style="background:grey">SALIR</button></RouterLink>



</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>