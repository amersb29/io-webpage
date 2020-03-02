<template lang="html">
  <div class="card graySection" :style="{ backgroundImage: 'url(' + cardBackground + ')', backgroundRepeat: 'no-repeat'}">
    <div class="infoContainer" :style="[cardStyle, {  height: cardHeight } ]">
      <div class="card-body alignItemsAtCenter alignItemsToRight" >
        <h6>{{title}}</h6>
        <span class="txtRed txtBold cardPrice">{{price | currency}}</span>
      </div>
    </div>
    <a href="#" class="card-link">VER MÁS</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cardStyle: {
          display: 'block',
          width: 'vh',
          backgroundRepeat: 'no-repeat'
        }
    }
  },
  props: ['title', 'link', 'price', 'image', 'imgWidth', 'height'],
  computed: {
    cardHeight: obj => {
      return obj.height === 'lg' ? '542px' : '272px';
    },
    cardBackground: obj => {
      return require('~/assets/img/' + obj.image)
    }
  },
  filters: {
    currency: function ( value ) {
      if (!value) return ''
      return '$ ' + value + '.00 MXN'
    }
  }
}
</script>

<style lang="css" scoped>
.card{
  background-size: cover;
}
  .card-body{
    background-color: white;
    height: 60px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .card-link{
    background-color: black;
    bottom: 0;
    display: block;
    height: 180px;
    position: absolute;
    right: -50px;
    width: 50px;
  }
  .cardPrice{
    font-size: .7em;
  }
</style>
