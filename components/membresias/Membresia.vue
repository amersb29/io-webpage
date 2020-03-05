<template lang="html">
  <div class="membresia-card">
    <h1 class="txtRed">{{type}}</h1>
    <div>
      <h1>{{price | currency}}</h1>
      <p class="txtRed">
        al mes
      </p>
    </div>
    <ul class="lista-beneficios">
      <li v-for="benefit in benefits" v-html="benefit"></li>
    </ul>
    <button class="btn btn-danger" @click="addToCart">Comprar</button>
  </div>
</template>

<script>
import SweetAlertMixin from '../../mixins/SweetAlertMixin'

export default {
  mixins: [SweetAlertMixin],
  props: ['id','type', 'price', 'currency', 'benefits', 'image'],
  methods: {
    addToCart() {
      const {id, price, type, image} = this.$props
      const membresia = {
        id,
        name: `Membresía ${type.charAt(0) + type.slice(1).toLowerCase()}`,
        image,
        tipoProducto: { price },
        type: 'membresia'
      }
      
      this.$store.dispatch('addProduct', membresia)
      this.printToastMsg('La membresía ha sido agregado al carrito', 'success')
    }
  }
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
