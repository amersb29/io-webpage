<template>
    <div class="loader">
        <img :src="loader" alt="Loading..." width="30%">                        
    </div>
</template>

<script>
export default {
  computed: {
    loader() {
      return `${process.env.api_url}${process.env.storage_folder}brain.gif`
    }
  }
}
</script>

<style>
.loader {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 70%;
}
</style>