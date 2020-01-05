<template lang="html">
  <div class="membresia-card">
    <h1 class="txtRed">{{type}}</h1>
    <div>
      <h1>${{price}} {{currency}}</h1>
      <p class="txtRed">
        al mes
      </p>
    </div>
    <ul class="lista-beneficios">
      <li v-for="benefit in benefits" v-html="benefit"></li>
    </ul>
    <button class="btn btn-danger">Comprar</button>
  </div>
</template>

<script>
export default {
  props: ['type', 'price', 'currency', 'benefits'],
}
</script>

<style lang="css">
.lista-beneficios{
  text-align: left;
  width: 100%;
}
.membresia-card{
  height: 300px;
}
.membresia-card ul{
  height: 130px;
}
</style>
