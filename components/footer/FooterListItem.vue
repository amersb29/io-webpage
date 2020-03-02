<template>
    <nuxt-link v-if="nuxtLink" :to="to">
        {{text}}
    </nuxt-link>
    <div v-bind:class="itemClass" v-else>
        <font-awesome-icon :icon="icon" class="contacto-icon"/>
        <span> {{text}} </span>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    components: {FontAwesomeIcon},
    props: {
        icon: {type: Array, default: () => []},
        text: {type: String, default: ''},
        nuxtLink: {type: Boolean, default: false},
        applyPadding: {type: Boolean, default: false},
        to: {type: String, default: ''}
    },
    computed: {
        itemClass() {
            return {
                'contacto': true,
                'padding-footer-content': this.applyPadding
            }
        }
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