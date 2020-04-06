<template>
    <div v-if="resetPwdSuccess" class="suSuccess">
        <h1>
            ¡Listo!
        </h1>
        <p>
            Te hemos enviado por correo el enlace para restablecer tu contraseña
        </p>
        <b-button @click="closeModal" variant="danger">Cerrar</b-button>
    </div>
    <div v-else>
        <ValidationObserver v-slot="{ invalid }">
            <b-form @submit.prevent="sendResetPassword" class="flexForm">
                <ValidationProvider
                    v-slot="{ errors, valid }"
                    name="Correo electrónico"
                    rules="required|email">
                    <b-form-group id="siUsername"
                                label="Correo electrónico:"
                                label-for="correo">
                        <b-form-input name="username" 
                                    type="email" 
                                    required 
                                    v-model="user.username"
                                    :state="valid"/>
                        <span class="txtRed">
                            {{ errors[0] }}
                        </span>
                    </b-form-group>
                </ValidationProvider>
                
                <div class="auth-button-container sign-in">
                    <div>
                        <b-button type="submit" variant="danger" :disabled="invalid">Restablecer mi contraseña</b-button>
                    </div>
                </div>
            </b-form>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import GraphQlMixin from '../../mixins/GraphQlMixin'
import ForgotPassword from '../../graphql/mutations/ForgotPassword.gql'

export default {
    mixins: [GraphQlMixin],
    components: {ValidationObserver, ValidationProvider},
    data() {
        return {
            user: {
                username:  null,
            },
        }
    },
    methods: {
        closeModal() {
            this.$store.commit('changeResetPwdSuccess', false)
            this.$emit('onClose')
        },
        sendResetPassword() {
            this.$store.dispatch('sendResetPassword', { mutation: ForgotPassword, variables: { email: this.user.username } } )
        },
    },
    computed: {
        resetPwdSuccess() {
            return this.$store.getters.resetPwdSuccess
        }
    }
}
</script>

<style>

</style>