<template lang="html">
  <div>
    <section class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-md-10 margin-bottom-50">
          <img :src="getImage( headerImg )" style="width: inherit;" />
        </div>
        <h1 class="txtRed margin-bottom-50">{{titulo}}</h1>
      </div>
      <div class="row margin-bottom-50">
        <div class="col-md-12 content-flex-wrap">
          <div v-for="curso in cursos" class="curso-card">
            <img :src="getImage( curso.image )" :alt="curso.titulo" class="imgCourse">
            <h3> {{ curso.titulo }}</h3>
            <p class="curso-descripcion" v-html="curso.descripcion"></p>
            <a class="ver-mas" @click.prevent="showModal( modalName( curso.id ) )" href="#">Ver más</a>
            <div>
              <button type="button" class="btn btn-danger">COMPRAR ${{curso.precio}}</button>
              <button type="button" class="btn btn-secondary">COMPRAR PARA REGALO</button>
            </div>
            <b-modal :id="modalName( curso.id )" :title="curso.titulo" size="lg" hide-footer class="centerContentColum">
              <iframe :src="'https://player.vimeo.com/video/'+ curso.videoId" width="640" height="360" frameborder="0" allowfullscreen=""></iframe>
              <p class="descripcion-completa" v-html="curso.descripcion"></p>
              <div>
                <button type="button" class="btn btn-danger">COMPRAR ${{curso.precio}}</button>
                <button type="button" class="btn btn-secondary">COMPRAR PARA REGALO</button>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  props: ['cursos', 'titulo', 'headerImg'],
  methods: {
    getImage( image ){
      // return require('~/assets/img/cursos/' + image)
    },
    modalName ( id ){
      return 'modal_' + id
    },
    showModal ( modal ) {
      this.$root.$emit('bv::show::modal', modal)
    },
    hideModal () {
      this.$root.$emit('bv::hide::modal', modal)
    }
  }
}
</script>

<style lang="css">
.descripcion-completa{
  mergin-top: 20px;
  text-align: justify;
  padding: 20px 30px;
}
.curso-card{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  margin: 20px;
}
.content-flex-wrap{
  display: flex;
  flex-wrap:  wrap;
  justify-content: center;
}
.curso-descripcion{
  height: 100px;
  overflow: hidden;
  text-align: justify;
  position: relative;
  margin-right: -1em;
  margin-bottom: 5px !important;
  padding-right: 1em;
  line-height: 1.2em;
  max-height: 3.6em;

}
.curso-descripcion:before {
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
}
.curso-descripcion:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: $bgColor;
}
.imgCourse{
  width: 390px;
  height: 259px;
  margin-bottom: 10px;
}
.curos-card h3 {
  text-align: center !important;
}
.ver-mas, .ver-mas:hover{
  display: block;
  text-decoration: none;
  color: #dc3545;
  margin-bottom: 10px;
  text-align: center;
}
</style>
