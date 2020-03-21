<template>
    <hooper class="presenciales" :infiniteScroll="true" :touchDrag="false" :centerMode="true"
                                :autoPlay="true" :playSpeed="3500">
        <slide v-for="banner in banners" :key="banner.id">
            <img :src="getImage(banner.image)" 
                    :alt="banner.image"/>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';

export default {
    components: { Hooper, HooperNavigation, Slide },
    props: {
        banners: {
            type: Array,
            default: []
        }
    },
    methods: {
        getImage(image) {
            return `${process.env.api_url}${process.env.storage_folder}${image}`
        }
    },
}
</script>

<style>
.hooper-slide img {
    width: inherit;
}

.presenciales{
    min-height: 423px;
}
</style>