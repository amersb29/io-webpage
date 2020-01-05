import Vue from 'vue'
import accounting from 'accounting'

Vue.filter('currency', function (money) { 
    return accounting.formatMoney(money) 
})