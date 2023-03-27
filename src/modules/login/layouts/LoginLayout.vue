<template >
  <section class="principal">
     <div class="menu">
             <h1>Sistema de Gestión Odontológica</h1>
             <h3>BIENVENIDO</h3> 
             <div class="botones">
               <RouterLink to="/login-auth"><button class="btn-acento">Login</button></RouterLink>
                       <button class="btn-primary">Registro</button>

                      <div class="rectangulo"></div>
             </div>
     </div>   
 </section>
</template>

<style scoped>.principal {
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

.menu h1{

  font-style: italic;
  font-weight: 900;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: 0.16px;
  color: #ffff;
}
.menu h3{
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

.principal .botones {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.menu .botones .btn2 {
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-bottom: 10%;  
}

.botones .btn-acento {
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
  border:none;
  margin: 5% 0% 10% 0%;
  cursor:pointer;
  transition: all 1s ease;

}

.botones .btn-primary {
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
  border:none;
  margin: 5% 0% 10% 0%;
  cursor:pointer;
  transition: all 1s ease;
}

.btn-primary:hover{
  background-color: #00002E;
}
.btn-acento:hover{
  background-color: #847996;
}

.menu .botones .btn2 .btn-primary{
  font-size: 20px;
  text-transform: capitalize;
  height: 48px;
  width: 272px;
  border-radius: 30px;
  padding-left: 27px;
}
.menu .botones a{
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FAD8D6;
}
</style>


