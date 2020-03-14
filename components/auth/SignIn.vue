<template>
    <div>
        <ValidationObserver v-slot="{ invalid }">
            <b-form @submit.prevent="signIn" class="flexForm">
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
                <ValidationProvider
                    v-slot="{ errors, valid }"
                    name="Contraseña"
                    rules="required">
                    <b-form-group id="siPassword"
                                label="Contraseña:"
                                label-for="contrasenia">
                        <b-form-input name="password" 
                                    type="password" 
                                    required 
                                    v-model="user.password"
                                    :state="valid"/>
                    <span class="txtRed">
                        {{ errors[0] }}
                    </span>
                    </b-form-group>
                </ValidationProvider>
                <div class="auth-button-container sign-in">
                    <div>
                        <b-button type="submit" variant="danger" :disabled="invalid">Iniciar sesión</b-button>
                        <b-button @click="forgotPswd">OLVIDÉ MI CONTRASEÑA</b-button>
                    </div>
                    <div class="without-account">No tengo cuenta y <a @click="openSignUp">Quiero Registrarme</a></div>
                </div>
            </b-form>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import GraphQlMixin from '../../mixins/GraphQlMixin'
import SignIn from '../../graphql/mutations/SignIn.gql'

export default {
    mixins: [GraphQlMixin],
    components: {ValidationObserver, ValidationProvider},
    data() {
        return {
            user: {
                username:  null,
                password:  null,
            },
        }
    },
    methods: {
        forgotPswd() {
            this.$store.commit('changeAuthMode', 'restorePwd')
        },
        async signIn() {
            console.log('Sign In')
            const {username, password} = this.user
            const res = await this.executeMutation(SignIn, {username, password})
            
            this.$store.dispatch('storeToken', res)

            this.$emit('onClose')
        },
        openSignUp() {
            this.$store.commit('changeAuthMode', 'signUp')
        },
    }
}
</script>

<style>
.without-account {
    font-weight: 600;
}
.without-account a, .without-account a:hover{
    color: #dc3545;
    text-decoration: none;
}
.without-account a:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>