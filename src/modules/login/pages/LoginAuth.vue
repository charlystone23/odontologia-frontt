<template>
  <div class="color-fondo">
    <br /><br />

    <h2>INGRESE SU CUENTA Y CONTRASEÑA</h2>
    <br /><br /><br />
    <div class="formulario" style="margin-left: 500px">
      <form class="col-6" v-on:submit.prevent="login">
        <div class="mb-3">
          <input
            type="text"
            v-model="username"
            class="form-control"
            id="user"
            name="user"
            placeholder="Usuario"
            required
          />
          <small id="helpId" class="minit">NOMBRE DE USUARIO</small>
        </div>

        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="pass"
            v-model="password"
            name="pass"
            placeholder="Contraseña"
            required
          />
          <small id="helpId" class="minit">CONTRASEÑA</small>
        </div>
        <br /><br /><br />
        <div class="justify-content-start">
          <button type="submit" class="botones">INGRESAR</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  /* mounted(){
    this.login()
  }, */

  methods:{
    login(){
      let user = {
        "username" : 'lourdes',
        "password" : 'milenium123' 
      }
          if(user.username == this.username && user.password == this.password){

                  this.$router.push("/home-page");
                  this.$toast.success("Bienvenido/a "+ this.username)
            
          }
          else{
            this.$toast.error('Credenciales invalidas')
            this.username = '';
            this.password = "";
          }
      }
    },



};

</script>

<style SCOPEd>
</style>
