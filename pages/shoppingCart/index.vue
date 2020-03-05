<template>
    <b-container id="shopping-cart-container" class="margin-bottom-50 margin-top-50">
        <b-row>
            <b-col>
                <h1 class="txtRed">Detalles del Carrito</h1>
            </b-col>
        </b-row>
        <b-row v-if="isCartEmpty">
            <b-col>
                <FontAwesomeIcon :icon="['fas','heart-broken']" class="txtRed" />
                No hay productos en el carrito
            </b-col>
        </b-row>
        <b-row v-else>
            <b-col cols="9">
                <b-row class="cart-header">
                    <b-col cols="4">Producto</b-col>
                    <b-col cols="5">Detalles</b-col>
                    <b-col cols="3">Total</b-col>
                </b-row>
                <Product v-for="product in products"
                        :key="product.id"
                        :data="product"/>
            </b-col>
            <b-col>
                <div class="cart-payment">
                    <h4 class="txtRed">
                        Resumen del pedido
                    </h4>
                    <div class="cart-payment-subtotal">
                        <span>Subtotal:</span>
                        <span>{{total | currency}}</span>
                    </div>
                    <div class="cart-payment-cupon">
                        <b-form-input id="input-1" v-model="cupon" trim placeholder="Introducir el cupón" size="sm"></b-form-input>
                        <b-button variant="danger" size="sm">Aplicar</b-button>
                    </div>
                    <div class="cart-payment-total">
                        <span>Total:</span>
                        <span>{{total - 1000 | currency}}</span>
                    </div>
                    <b-button variant="warning" >Pagar</b-button>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Product from '@/components/shopping_cart/Product'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    components: {Product, FontAwesomeIcon},
    data() {
        return {
            cupon: ''
        }
    },
    computed: {
        products() {
            return this.$store.getters.shoppingCart
        },
        total() {
            return this.$store.getters.shoppingCartTotal
        },
        isCartEmpty() {
            return this.$store.getters.shoppingCartSize === 0
        }
    }

}
</script>

<style>
#shopping-cart-container .row:not(:first-of-type) {
    margin-top: 20px;
}
#shopping-cart-container .row:first-of-type {
    margin-top: initial;
}
.cart-header .col-3,
.cart-header .col-4,
.cart-header .col-5 {
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
}
.cart-payment {
    border: 2px solid #D63D37;
    border-radius: 5px;
    height: 300px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.cart-payment h4 {
    margin-bottom: 30px;
}
.cart-payment-total {
    color: #D63D37;
    font-size: 2em;
    font-weight: 600;
    height: 40%;
    padding-top: 20px;
}
.cart-payment-subtotal {
    font-size: 1.1em;
    font-weight: bold;
    height: 20%;
}
.cart-payment-subtotal,
.cart-payment-total {
    display: flex;
    justify-content: space-between;
    width: 100%;
    
}
.cart-payment-subtotal span,
.cart-payment-total span {
    display: block;
}
.cart-payment-cupon {
    display: flex;
    width: 100%;
}
.cart-payment-cupon input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: transparent;
}
.cart-payment-cupon button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

</style>