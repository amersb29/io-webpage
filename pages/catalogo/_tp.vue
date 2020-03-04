<template lang="html">
  <div>
    <Catalogo :tipo_producto_id="tipo_producto_id"/>
    <PreguntasFrecuentes />
  </div>
</template>

<script>
import Catalogo from '~/components/catalogos/Catalogo.vue'
import PreguntasFrecuentes from '~/components/PreguntasFrecuentes.vue'

export default {
  components: {Catalogo, PreguntasFrecuentes},
  computed: {
    tipo_producto_id() {
      return this.$route.params.tp
    }
  },
}
</script>
