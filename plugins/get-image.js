import Vue from 'vue';

Vue.prototype.$getImage = image => {
    return `${process.env.apiURL}/storage/images/${image}`
}