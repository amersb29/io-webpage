<template>
    <div v-if="false" class="suSuccess">
        <h1>
            ¡Tu registro ha sido exitoso!
        </h1> 
        <p>
            Por razones de seguridad tu usuario se encuentra <span>inactivo</span>.
        </p>
        <p>
            Te hemos enviado un correo electrónico a <b>{{user.email}}</b> con las instrucciones que deberás realizar para activar tu cuenta.
        </p>
        <button @click="closeModal('signUp')" variant="danger">Cerrar</button>
    </div>
    <div v-else>
        <ValidationObserver v-slot="{ invalid }">
            <b-form @submit.prevent="restorePwd" class="flexForm">
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
import SignIn from '../../graphql/mutations/SignIn.gql'

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
        async restorePwd() {
            console.log('Restore Password')
            const {username} = this.user
            const res = await this.executeMutation(SignIn, {username})
            
            this.$store.dispatch('storeToken', res)

            this.$emit('onClose')
        },
    }
}
</script>

<style>

</style>