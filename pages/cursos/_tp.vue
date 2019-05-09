<template lang="html">
  <div>
    <Catalogo :cursos="cursos" :titulo="titulo" :headerImg="headerImg"/>
    <PreguntasFrecuentes />
  </div>
</template>

<script>
import axios from 'axios'
import Catalogo from '~/components/Catalogo.vue'
import PreguntasFrecuentes from '~/components/PreguntasFrecuentes.vue'

export default {
  components: {Catalogo, PreguntasFrecuentes},
  data(){
    return {
      cursos: [],
      titulo: '',
      headerImg: '',
      tipoCurso: ''
    }
  },
  methods: {
    setCatalogoProps(tp, titulo, img){
      this.tipoCurso = tp
      this.titulo = titulo
      this.headerImg = img
    }
  },
  created(){
    switch (this.$route.params.tp) {
      case '1':
        this.setCatalogoProps('cursosEnLinea', 'CURSOS EN LÍNEA', 'banner-header-cursos1.png')
        break;
      case '2':
        this.setCatalogoProps('cursosEnLinea', 'CONFERENCIAS EN LÍNEA', 'imagen-header-conferencias.jpg')
        break;
      case '5':
        this.setCatalogoProps('cursosEnLinea', 'DOCUMENTALES', 'imagen-header-documentales.jpg')
        break;
      // default:

    }

    axios.get(`http://localhost:3004/${this.tipoCurso}`)
          .then( response => this.cursos = response.data)
  }
}
</script>
