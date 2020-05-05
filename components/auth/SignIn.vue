<template>
  <div v-if="!userVerified" class="suSuccess">
    <h1>
        ¡Tu cuenata requiere ser activada!
    </h1> 
    <p>
        Hemos detectado que tu cuenta <span>no ha sido verificada.</span>
    </p>
    <p>
        En el proceso de registro te hemos enviado un correo electrónico con las instrucciones que deberás realizar para activar tu cuenta.
    </p>
    <p>
        Si requieres que te enviemos nuevamente el correo de verificación da <span>Click Aquí.</span>
    </p>
    <b-button @click="closeModal" variant="danger">Cerrar</b-button>
  </div>
  <div v-else>
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
          <p class="txtRed"><b> {{ signInError }} </b></p>
          <div>
              <b-button type="submit" variant="danger" :disabled="invalid">
                <div v-if="isLoading">
                  <b-spinner
                    small
                    type="grow"
                    variant="light"
                  ></b-spinner>
                  Loading...
                </div>
                <span v-else>
                  Iniciar sesión
                </span>
              </b-button>
              <b-button @click="forgotPswd" :disabled="isLoading">OLVIDÉ MI CONTRASEÑA</b-button>
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
      closeModal(){
        this.$emit('onClose')
      },
      forgotPswd() {
        this.$store.commit('changeAuthMode', 'restorePwd')
      },
      signIn() {
        this.$store.dispatch('login', {mutation: SignIn, variables: this.user })
      },
      openSignUp() {
        this.$store.commit('changeAuthMode', 'signUp')
      },
    },
    computed: {
      isLoading () {
        return this.$store.getters.isLoading
      },
      token() {
        return this.$store.getters.access_token
      },
      userVerified () {
        return this.$store.getters.userVerified
      },
      signInError () {
        return this.$store.getters.signInError
      }
    },
    watch: {
        token (newToken, oldToken) {
            this.closeModal()
        }
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