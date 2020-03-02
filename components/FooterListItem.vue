<template>
    <!-- <span> -->
        <nuxt-link v-if="nuxtLink" :to="to">
            {{text}}
        </nuxt-link>
        <div class="contacto" :class="{'padding-footer-content': applyPadding}" v-else>
            <font-awesome-icon :icon="icon" class="contacto-icon"/>
            <span> {{text}} </span>
        </div>
    <!-- </span> -->
</template>

<script>
export default {
    props: {
        icon: {type: Array, default: []},
        text: {type: String, default: ''},
        nuxtLink: {type: Boolean, default: false},
        applyPadding: {type: Boolean, default: false},
        to: {type: String, default: ''}
    }
}
</script>

<style>
.contacto-icon{
    display: inline-block;
    margin-right: 15px;
}
.padding-footer-content{
  padding-left: 40px;
}
</style>