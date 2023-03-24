<template>
  <h1>editar tratamietnos</h1>

  <RouterLink to="/listar-tratamientos">
    <button type="button" class="btn btn-secondary">volver</button></RouterLink
  >
</template>

<script>
export default {
data(){
    return{
        tratamientos:[],
        trt:{
            "descripcion":"",
            "precio":"",
            "duracion":""
            
            }
    }
},
created:function(){
    this.consultarTratamientos()
},
methods:{
    consultarTratamientos(){
        fetch('http://localhost:4000/api/tratamientos/' + this.$route.params.id,{method:'GET'})
        .then(res => console.log(res))
        

    },
        
}



};
</script>

<style>
</style>