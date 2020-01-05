<template lang="html">
  <section class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="col-md-10 margin-bottom-50">
        <img :src="image( headerImg )" style="width: inherit;" />
      </div>
      <h1 class="txtRed">{{titulo}}</h1>
    </div>
    <ApolloQuery :query="require( `@/graphql/queries/Catalogo.gql` )"
                 :variables="{ tipo_producto_id }">
      <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" >
        <div class="row margin-bottom-50">
          <div class="col-md-12 content-flex-wrap">
            <info-curso v-for="product in data.productsFilter" :curso="product" :key="product.id"></info-curso>
          </div>
        </div>
      </div>
      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </section>
</template>

<script>
import InfoCurso from './InfoCurso'

export default {
  components: { InfoCurso },
  mounted(){
    switch (+this.tipo_producto_id) {
      case 1:
        this.setCatalogoProps('CURSOS EN LÍNEA', 'banner-header-cursos1.png')
        break;
      case 2:
        this.setCatalogoProps('CONFERENCIAS EN LÍNEA', 'imagen-header-conferencias.jpg')
        break;
      case 3:
        this.setCatalogoProps('DOCUMENTALES', 'imagen-header-documentales.jpg')
        break;
    }
  },
  props: {
    tipo_producto_id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      titulo: '',
      headerImg: ''
    }
  },
  methods: {
    image( image ){
      return this.$getImage(image)
    },
    setCatalogoProps(titulo, headerImg){
      this.titulo = titulo
      this.headerImg = headerImg
    },
  },
}
</script>

<style lang="css">
.content-flex-wrap{
  display: flex;
  flex-wrap:  wrap;
  justify-content: center;
}
</style>
