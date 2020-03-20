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
                        :key="product.name"
                        :data="product"/>
            </b-col>
            <b-col>
                <div class="cart-payment">
                    <h4 class="txtRed">
                        Resumen del pedido
                    </h4>
                    <div class="cart-payment-subtotal">
                        <span>Subtotal:</span>
                        <span>{{subTotal | currency}}</span>
                    </div>
                    <div class="cart-payment-cupon">
                        <div v-if="isCouponApplied" class="cupon-applied">
                            Cupón aplicado 🎉
                        </div>
                        <b-form @submit.prevent="applyCoupon($event)" v-else>
                            <b-form-input id="input-1" v-model="code" trim placeholder="Introducir el cupón" size="sm"></b-form-input>
                            <b-button variant="danger" size="sm" type="submit">Aplicar</b-button>
                        </b-form>
                    </div>
                    <div class="cart-payment-total">
                        <span>Total:</span>
                        <span>{{total | currency}}</span>
                    </div>
                    <div ref="paypal" class="paypal-buttons"></div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Product from '@/components/shopping_cart/Product'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import query from '@/graphql/queries/Cupon.gql'

export default {
    components: {Product, FontAwesomeIcon},
    mounted() {
        const script = document.createElement('script')
        script.src = `https://www.paypal.com/sdk/js?currency=${this.$store.state.currency}&client-id=${process.env.paypal_id}`
        script.addEventListener('load', this.setLoaded)
        document.body.appendChild(script)
    },
    data() {
        return {
            code: '',
            loaded: false,
            paidFor: false,
        }
    },
    computed: {
        discount() {
            return this.$store.getters.discount
        },
        products() {
            return this.$store.getters.shoppingCart
        },
        subTotal() {
            return this.$store.getters.shoppingCartSubTotal
        },
        total() {
            return this.$store.getters.shoppingCartTotal
        },
        isCartEmpty() {
            return this.$store.getters.shoppingCartSize === 0
        },
        isCouponApplied() {
            return this.$store.getters.discount !== 0
        }
    },
    methods: {
        applyCoupon( event ) {
            const {code} = this 
            this.$apollo.query({
                query,
                variables: { code }
            })
            .then( res => {
                const {discount, expiration} = res.data.coupon
                const now = new Date()
                const exp = new Date(expiration)

                if(now.getTime() < exp.getTime()) {
                    this.$store.commit('updateDiscount', discount)
                }
                
            })
            .catch( error => console.log(error))
        },
        setLoaded() {
            // https://developer.paypal.com/docs/checkout/best-practices/smart-payment-buttons/
            this.loaded = true
            
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                this.$store.getters.shoppingCart.reduce( (a, b) => {
                                    return { 
                                                description: a.description +', '+ b.name.toLowerCase(), 
                                                // amount: {value: a.amount.value + (Number.parseFloat(b.price) * b.counter) }
                                                amount: { value: this.$store.getters.shoppingCartTotal }
                                            }
                                }, {description: '', amount: { value: 0 } } )
                            ]
                                            
                        })
                    },
                    onApprove: function(data, actions) {
                        return actions.order.capture().then(function(details) {
                            // TODO: Registrar la compra (usuario::id)
                            //       Asociar los productos a la compra (producto::id, compra::id) 
                            // TODO: Registrar pago (usuario::id, compra::id, metodoPago::id, total)
                            // TODO: Actualizar la información del usuario si pagó membresía (activo, tipo_membresía)
                            //       Asignar los productos al usuario
                            // TODO: Mostrar modal con los productos comprados
                            debugger
                            // This function shows a transaction success message to your buyer.
                            alert('Transaction completed by ' + details.payer.name.given_name);
                        });
                    }
                })
                .render(this.$refs.paypal)
        }
    }

}
</script>

<style>
#shopping-cart-container {
     min-height: 500px;
}
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
    min-height: 300px;
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
    font-size: 1.3em;
    font-weight: 600;
    height: 40%;
    padding-top: 20px;
}
.cart-payment-subtotal {
    font-size: 1.1em;
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
    margin-top: 20px;
    text-align: center;
    width: 100%;
}
.cart-payment-cupon form {
    display: flex;
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
.cupon-applied {
    height: 31px;
    width: inherit;
}
.paypal-buttons{
    margin-top: 10px;
}
</style>