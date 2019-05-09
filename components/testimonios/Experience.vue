<template lang="html">
  <div class="rowContentAtLeftBottom margin-bottom-100">
    <div class="experience contentAtTheEnd alignItemsToLeft">
      <h2>{{name}}</h2>
      <span class="txtJustify">{{comment}}</span>
    </div>
    <img :src="avatarImg" height="450">
  </div>
</template>

<script>
export default {
  props: ['avatar', 'name', 'comment'],
  computed: {
    avatarImg: obj => {console.log(obj.avatar);
      // return require(`~/assets/img/${obj.avatar}`)
      return require('~/assets/img/'+obj.avatar)
    }
  }
}
</script>

<style lang="css">
.experience.h2, .experience span{
  color: #000;
  text-align: justify;
  padding-right: 30px;
}
</style>
