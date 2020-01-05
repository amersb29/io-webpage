<template>
    <b-card :title="curso.name"
            :img-src="image(curso.image)"
            style="margin: 20px; width: 400px">
        <b-card-text class="curso-descripcion" v-html="curso.description"></b-card-text>
        <a class="ver-mas" @click.prevent="showModal( modalName( curso.id ) )" href="#">Ver más</a>
        <b-button-group>
            <b-button variant="danger">COMPRAR {{curso.tipoProducto.price | currency}}</b-button>
            <b-button variant="secondary">COMPRAR PARA REGALO</b-button>
        </b-button-group>
        <b-modal :id="modalName( curso.id )" :title="curso.name" size="lg" hide-footer>
          <div class="centerContentColum">
            <iframe :src="'https://player.vimeo.com/video/'+ videoId" width="640" height="360" frameborder="0" allowfullscreen=""></iframe>
            <p class="descripcion-completa" v-html="curso.description"></p>
            <div>
                <button type="button" class="btn btn-danger">COMPRAR {{curso.tipoProducto.price | currency}}</button>
                <button type="button" class="btn btn-secondary">COMPRAR PARA REGALO</button>
            </div>
          </div>
        </b-modal>
    </b-card>
</template>

<script>
export default {
    name: 'info-curso',
    props: {
        curso: { type: Object, default: undefined },
    },
    computed: {
      videoId () {
        if(this.curso.videos.length){
          return this.curso.videos.filter( v => { if(v.is_preview) return v.vimeo_id } )[0].vimeo_id
        }
        return ''
      }
    },
    methods: {
        image( image ){
          return this.$getImage(image)
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

<style>
.card img {
  width: inherit;
  height: 259px;
  margin-bottom: 10px;
}
.card-title {
  min-height: 58px;
  display: flex;
  align-items: center;
}
.card-body {
  padding-top: 0;
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
  /* background: $bgColor; */
}
.descripcion-completa{
  margin-top: 20px;
  text-align: justify;
  padding: 20px 30px;
}
.ver-mas, .ver-mas:hover{
  display: block;
  text-decoration: none;
  color: #dc3545;
  margin-bottom: 10px;
  text-align: center;
}
</style>