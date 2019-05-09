<template lang="html">
  <section class="section-frase centerContentColum" :style="{ backgroundImage: 'url(' + fraseBG + ')' }">
    <div class="txtCenter">
      <h3 class="txtWhite">{{frase}}</h3>
      <span class="txtWhite">-Martín Aparicio</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ['frase'],
  computed: {
    fraseBG: () => {
      return require('~/assets/img/imagen_fondo_frase.jpg')
    }
  }
}
</script>

<style scoped>
.section-frase{
  background-size: cover;
  height: 600px;
}
</style>
