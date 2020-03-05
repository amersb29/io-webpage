<template>
    <b-row>
        <b-col class="cart-column" cols="4">
            <div class="cart-image">
                <img :src="productImage" :alt="name"/>
            </div>
        </b-col>
        <b-col  cols="5">
            <div class="cart-name">
                <span>Curso:</span>
                <div>{{name}}</div>
            </div>
            <div class="cart-price">
                <span>Precio:</span>
                <div>{{price | currency}}</div>
            </div>
            <div class="cart-counter">
                <span>Cantidad:</span>
                <b-form-spinbutton id="sb-inline" 
                                v-model="counter" 
                                inline 
                                @change="incrementCounter"
                                size="sm">
                </b-form-spinbutton>
            </div>
            <div class="cart-actions">
                <FontAwesomeIcon :icon="['fas','trash']" @click="removeProduct"/>
            </div>
        </b-col>
        <b-col cols="3" class="cart-total">
            <span>
                {{counter * price | currency}}
            </span>
        </b-col>
    </b-row>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default {
    components: {FontAwesomeIcon},
    created() {
        this.assignData(this.data)
    },
    data() {
        return {
            id: -1,
            image: null,
            name: null,
            counter: 0,
            price: 0
        }
    },
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        assignData({id, name, image, counter, price}) {
            this.id = id
            this.name = name
            this.image = image
            this.counter = counter
            this.price = price
        },
        incrementCounter() {
            const {id, counter} = this 
            this.$store.dispatch('incrementCounter', {id, counter})
        },
        removeProduct() {
            this.$store.dispatch('removeProduct', this.$store.getters.shoppingCart.find(p => p.id === this.id).id)
        }
    },
    computed: {
        productImage() {
            return `${process.env.api_url}${process.env.storage_folder}${this.image}`
        }
    }

}
</script>

<style>
.cart-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.cart-image {
    display: flex;
    justify-content: flex-start;
}
.cart-image img{
    width: 100%;
}
.cart-name div{
    width: 100%;
}
.cart-name, .cart-price {
    display: flex;
}
.cart-name span:first-of-type, 
.cart-price span:first-of-type,
.cart-counter span:first-of-type {
    display: block;
    font-weight: bold;
    margin-right: 8px;
    width: 50px;
}
.cart-price div {
    color: #dc3545;
    font-weight: 600;
}
.cart-counter {
    align-items: center;
    display: flex;
    position: absolute;
    top: 50%;
}
.cart-counter span:first-of-type {
    width: 75px;
}
.cart-actions {
    bottom: 5px;
    color: #dc3545;
    position: absolute;
    cursor: pointer;
}
.cart-total {
    font-size: 1.3em;
    margin-top: 5px;
    text-align: center;
}
</style>