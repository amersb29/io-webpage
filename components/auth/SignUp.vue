<template>
  <div v-if="signUpSuccess" class="suSuccess">
    <h1>
        ¡Tu registro ha sido exitoso!
    </h1> 
    <p>
        Por razones de seguridad tu usuario 
        se encuentra <span>inactivo</span>.
    </p>
    <p>
        Te hemos enviado un correo electrónico 
        a <b>{{user.email}}</b> con las instrucciones 
        que deberás realizar para activar tu cuenta.
    </p>
    <b-button @click="closeModal" variant="danger">Cerrar</b-button>
  </div>
  <div v-else>
    <ValidationObserver v-slot="{ valid }">
      <b-form @submit.prevent="signUp" class="flexForm">
        <ValidationProvider
          v-slot="{ errors, valid }"
          name="Nombre(s)"
          rules="required|alpha_spaces"
        >
          <b-form-group 
            id="first_name"
            label="Nombre(s):"
            label-for="firstName"
          >
            <b-form-input 
              id="firstName" 
              name="first_name" 
              type="text" 
              v-model="user.firstName"
              required
              :state="valid"/>
            <span class="txtRed">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors, valid }"
          name="Apellido(s)"
          rules="required|alpha_spaces"
        >
          <b-form-group   
            id="last_name"
            label="Apellido(s):"
            label-for="lastName"
          >
            <b-form-input 
              id="lastName" 
              name="last_name" 
              type="text" 
              v-model="user.lastName"
              required
              :state="valid"/>
            <span class="txtRed">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>
        <span>
            <b-form-group 
              id="country"
              label="País de orígen:"
              label-for="country_id">
                <CountriesSelect 
                  name="country_id" 
                  onlyCountries 
                  v-model="user.country_id" 
                  :state="true"
                />
            </b-form-group>
        </span>
        <ValidationProvider
          v-slot="{ errors, valid }"
          name="Correo electrónico"
          rules="required|email"
        >
          <b-form-group 
            id="suUsername"
            label="Correo electrónico:"
            label-for="correo"
          >
            <b-form-input 
              name="username" 
              type="email" 
              required 
              v-model="user.email" 
              :state="valid"/>
            <span class="txtRed">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors, valid }"
          name="Contraseña"
          rules="required"
        >
          <b-form-group 
            id="suPassword"
            label="Contraseña:"
            label-for="contrasenia"
          >
            <b-form-input 
              name="password" 
              type="password" 
              required 
              v-model="user.password"
              :state='passwordValidation.valid && valid'/>
            <span class="txtRed">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors, valid }"
          name="Confirmar Contraseña"
          rules="required"
        >
          <b-form-group 
            id="password_2"
            label="Reescribe la Contraseña:"
            label-for="contrasenia_2"
          >
            <b-form-input 
              id="contrasenia_2" 
              type="password" 
              v-model.lazy='user.password_confirmation'
              :state="passwordValidation.valid && valid"/>
            <span class="txtRed">
                {{ errors[0] }}
            </span>            
          </b-form-group>
        </ValidationProvider>
        <div :style="{display: passwordValidation.valid ? 'none' : 'block'}" >
          <transition name="hint" appear>
          <div v-if='passwordValidation.errors.length > 0'>
            <ul>
              <li v-for='(error, index) in passwordValidation.errors' :key="index" class="txtRed">{{error}}</li>
            </ul>
          </div>
          </transition>
        </div>
        <div class="auth-button-container sign-up">
          <p class="txtRed"><b> {{ signInError }} </b></p>
          <b-button type="submit" variant="danger" v-show="valid && passwordValidation.valid">
            <div v-if="isLoading">
              <b-spinner
                  small
                  type="grow"
                  variant="light"
              ></b-spinner>
              Loading...
            </div>
            <span v-else>
              Registrarme
            </span>
          </b-button>
        </div>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import CountriesSelect from '../CountriesSelect'
import SignUp from '../../graphql/mutations/SignUp.gql'
import GraphQlMixin from '../../mixins/GraphQlMixin'

export default {
  components: {CountriesSelect, ValidationObserver, ValidationProvider},
  mixins: [GraphQlMixin],
  data() {
    return {
      pwdValidationError: {valid: false, errors: []},
      rules: [
        { message:'Se requiere una letra minúscula.', regex:/[a-z]+/ },
        { message:"Se requiere una letra mayúscula.",  regex:/[A-Z]+/ },
        { message:"8 caracteres como mínimo.", regex:/.{8,}/ },
        { message:"Se requiere al menos un número.", regex:/[0-9]+/ }
      ],
      user: {
          firstName: null,
          lastName:  null,
          email:     null,
          password:  null,
          password_confirmation: null,
          mem_id:    0,   // Sin membresía
          country_id: 1,  // México
          state: 0,       // Inactivo
          roles: [4]      // Consumidor 
      },
    }
  },
  computed: {
      isLoading () {
          return this.$store.getters.isLoading
      },
      notSamePasswords () {
              return this.user.password !== this.user.password_confirmation
      },
      passwordValidation() {
          let errors = []
          for (let condition of this.rules) {
              if (!condition.regex.test(this.user.password)) {
                  errors.push(condition.message)
              }
          }

          if(this.notSamePasswords) {
              errors.push('Passwords don\'t match.')
          }

          if (errors.length === 0) {
                  return { valid:true, errors }
          } else {
              return { valid:false, errors }
          }
      },
        signInError () {
        return this.$store.getters.signInError
      },
      signUpSuccess () {
          return this.$store.getters.signUpSuccess
      },
      validForm() {
          return true
      },
  },
  methods: {
      async signUp() {
          this.$store.dispatch('registerUser', { mutation: SignUp, variables: this.user })
      },
      closeModal() {
          this.$emit('onClose')
      },
  }
}
</script>

<style>

</style>