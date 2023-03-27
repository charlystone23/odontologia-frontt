<template>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
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
        <div class="sidebar">
            <a href="" class="btn-acento">+</a>
        </div>

        <section  class="main">   
            <div class="main-container">
                <div class="menu-izq">
                 <RouterLink to="/listar-pacientes"> <button type="button" class="btn-acento">Pacientes</button></RouterLink>
                  <RouterLink to="/listar-tratamientos"><button type="button" class="btn-acento">Tratamientos</button></RouterLink>

                    <a href="" class="btn-desabilitado">AGENDA</a>
                    <a href="cerrar_sesion.html" class="btn-secondary">CERRAR SESION</a>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.flex-container {
    display: flex;
    background-color: #00A6D0;
    flex-flow: row wrap;
    text-align: center;
    height: auto;
}

.contenido-header {
     background-color: #FAD8D6;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-content: center;
}

.main {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    background-image: url("../../../assets/image27.png");
    background-size: cover;
    align-items: center;
}


.main .main-container{
      
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: flex-start;
    

}
.sidebar {
    background: #FAD8D6;
    width: 50px;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sidebar a{

    display: flex;
    align-items: center;
    justify-content: center;
}
.main .main-container .menu-izq a{

    display: flex;
    align-items: center;
    justify-content: center;
}

.main .menu-izq{
    display: flex;
    align-items: center;
    flex-direction: column;
   
}
.main .main-container .menu-der a{

    display: flex;
    align-items: center;
    justify-content: center;
}


.main .menu-der{   
     display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: flex-end;
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
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #00002E;
    text-transform: capitalize;
    text-decoration: none;
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
.btn-acento {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    color: #FAD8D6;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.25px;
    background-color: #EE596D;
    width: 409px;
    height: 194px;
    border-radius: 40px;
    border: none;
    margin: 2% 0% 2% 0%;
    cursor: pointer;
    transition: all 1s ease;    
}

.sidebar .btn-acento{
    text-decoration: none;
    text-align: center;
    background-color: #EE596D;
    color: #FAD8D6;
    font-size: 36px;
    margin-top: 50px;
    width: 56px;
    height: 56px;
    border-radius: 16px;
}

.main .btn-desabilitado {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    color: #FAD8D6;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #b6b6b6;
    width: 409px;
    height: 194px;
    border-radius: 40px;
    border: none;
    margin: 2% 0% 2% 0%;
    cursor: pointer;
    transition: all 1s ease;
}


.btn-secondary {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #00002E;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #FAD8D6;
    width: 409px;
    height: 67px;
    border-radius: 40px;
    border: none;
    margin: 5% 0% 5% 0%;
    cursor: pointer;
    margin: 5% 0% 5% 0%;
    cursor: pointer;
    transition: all 1s ease;
}

.btn-primary:hover {
    background-color: #00002E;
}

.btn-acento:hover {
    background-color: #847996;
}


</style>