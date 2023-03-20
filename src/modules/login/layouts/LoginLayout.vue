<template >
  <div class="login-layout">
    <router-view></router-view>
    <h1>Sistema de Gestion Odontologica</h1>
    <h2>Bienvenido</h2>
    <RouterLink to="/login-auth"
      ><button class="login">Login</button></RouterLink
    >
    <button>Registro</button>

    <div class="rectangulo"></div>
  </div>
</template>

<style scoped>
.login-layout {
  height: 100vh;
  background: rgb(0, 153, 255);
}
</style>


