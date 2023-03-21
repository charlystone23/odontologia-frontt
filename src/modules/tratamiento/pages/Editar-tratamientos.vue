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
            "nombre":"",
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
        fetch('http://localhost:4000/api/tratamientos/editar-tratamientos/' + this.$route.params.id ).then(respuesta => respuesta.json())
                .then((datosTratamiento) => {
                    console.log(datosTratamiento)
                    this.trt = datosTratamiento
                    console.log(this.trt)

                }).catch(console.log)

    },

}



};
</script>

<style>
</style>