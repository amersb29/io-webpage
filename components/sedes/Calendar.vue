<template>
    <iframe :src="`https://calendar.google.com/calendar/embed?${src}`" 
            style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>