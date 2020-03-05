import Vue from 'vue';

Vue.prototype.$getImage = image => {
    return `${process.env.api_url}${process.env.storage_folder}${image}`
}