<template>
    <nuxt-link v-if="to.trim() !== ''" :to="to">
        <font-awesome-icon v-if="icon" :icon="icon" class="contacto-icon"/>
        <span> {{text}} </span>
    </nuxt-link>
    <a :href="href" target="_blank" rel="noopener noreferrer" v-bind:class="itemClass" v-else>
        <font-awesome-icon :icon="icon" class="contacto-icon"/>
        <span> {{text}} </span>
    </a>
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
        to: {type: String, default: ''},
        href: {type: String, default: ''}
    },
    computed: {
        itemClass() {
            return {
                'contacto': true,
                'padding-footer-content': this.applyPadding,
                'no-pointer-cursor': this.href === ''
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
.no-pointer-cursor {
    cursor: default;
}
</style>