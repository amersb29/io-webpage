<template>
  <b-modal :id="mode" title="Inteligencia Objetiva" size="lg" hide-footer class="centerContentColum">
    <b-form @submit.prevent="sendFormInfo" class="flexForm" v-show="!signUpSuccess">
      <b-form-group id="first_name"
                  label="Nombre:"
                  label-for="firstName"
                  v-show="isSignUp">
          <b-form-input id="firstName" 
                        name="first_name" 
                        type="text" 
                        v-model="user.firstName"
                        required/>
      </b-form-group>
      <b-form-group id="last_name"
                  label="Apellido(s):"
                  label-for="lastName"
                  v-show="isSignUp"
                  required>
          <b-form-input id="lastName" 
                        name="last_name" 
                        type="text" 
                        v-model="user.lastName"
                        required/>
      </b-form-group>
      <b-form-group id="country"
                  label="País de orígen:"
                  label-for="country_id"
                  v-show="isSignUp">
          <CountriesSelect name="country_id" onlyCountries v-model="user.country_id"/>
      </b-form-group>
      <b-form-group id="username"
                  label="Correo electrónico:"
                  label-for="correo">
          <b-form-input name="username" type="email" required v-model="user.email"/>
      </b-form-group>
      <b-form-group id="password"
                  label="Contraseña:"
                  label-for="contrasenia"
                  v-show="isSignIn || isSignUp">
          <b-form-input name="password" 
                        type="password" 
                        required 
                        v-model="user.password"
                        :state='passwordValidation.valid'/>
      </b-form-group>
      <b-form-group id="password_2"
                  label="Reescribe la Contraseña:"
                  label-for="contrasenia_2"
                  v-show="isSignUp">
          <b-form-input id="contrasenia_2" 
                        type="password" 
                        v-model.lazy='checkPassword'
                        :state="passwordValidation.valid"/>
      </b-form-group>
      
      <div :style="{display: passwordValidation.valid ? 'none' : 'block'}">
        <transition name="hint" appear>
          <div v-if='passwordValidation.errors.length > 0' class='hints'>
            <ul>
              <li v-for='(error, index) in passwordValidation.errors' :key="index">{{error}}</li>
            </ul>
          </div>
        </transition>
      </div>

      <div class="auth-button-container">
        <div>
          <b-button type="submit" variant="danger" :disabled="!validForm">{{formButtonTxt}}</b-button>
          <b-button @click="forgotPswd" v-show="isSignIn">OLVIDÉ MI CONTRASEÑA</b-button>
        </div>
        <div class="without-account" v-show="isSignIn">No tengo cuenta y <a @click="openSignUp">Quiero Registrarme</a></div>
      </div>
    </b-form>
    <div v-if="signUpSuccess" class="suSuccess">
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
  </b-modal>
</template>

<script>
import CountriesSelect from '../CountriesSelect'
import SignUp from '../../graphql/mutations/SignUp.gql'
import SignIn from '../../graphql/mutations/SignIn.gql'

export default{
  components: {CountriesSelect},
  data() {
    return {
      checkPassword: null,
      signUpSuccess: false,
      user: {
        firstName: null,
        lastName:  null,
        email:     null,
        password:  null,
        mem_id:    0,   // Sin membresía
        country_id: 1,  // México
        state: 0,       // Inactivo
        roles: [4]      // Consumidor 
      },
      pwdValidationError: {valid: false, errors: []},
      rules: [
				{ message:'One lowercase letter required.', regex:/[a-z]+/ },
				{ message:"One uppercase letter required.",  regex:/[A-Z]+/ },
				{ message:"8 characters minimum.", regex:/.{8,}/ },
				{ message:"One number required.", regex:/[0-9]+/ }
			],
    }
  },
  props: {
    mode: { type: String, default: '' }
  },
  computed: {
    formButtonTxt() {
      switch (this.$store.state.authMode) {
        case 'signUp':
          return 'Registrarme'
        case 'restorePwd':
          return 'Restablecer mi contraseña'
        default:
          return 'Iniciar Sesión'
      } 
    },
    isSignUp() {
      return this.$store.getters.isSignUp
    },
    isSignIn() {
      return this.$store.getters.isSignIn
    },
    notSamePasswords () {
				return this.user.password !== this.checkPassword
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
    validForm() {
      return this.passwordValidation.valid && this.user.email && this.user.firstName && this.user.lastName
    }
  },
  methods: {
    closeModal(mode) {
      this.$bvModal.hide(mode)
    },
    forgotPswd() {
      this.$store.commit('changeAuthMode', 'restorePwd')
    },
    openSignUp() {
      this.$store.commit('changeAuthMode', 'signUp')
    },
    restorePwd() {
      console.log('Restore Password');
      
    },
    sendFormInfo() {
      switch (this.$store.state.authMode) {
        case 'signUp':
          this.signUp()
          break
        case 'restorePwd':
          this.restorePwd()
          break
        default:
          this.signIn()
          break
      }
    },
    async signIn() {
      console.log('Sign In')
      const {email: username, password} = this.user
      const res = await this.executeMutation(SignIn, {username, password})
      
      this.$store.commit('changeAccessToken', res.access_token)
      this.closeModal('signIn')
    },
    async signUp() {
      console.log('Sign Up')
      const res = await this.executeMutation(SignUp, this.user)
      
      if(res.id){
        this.signUpSuccess = true
      }
    },
    async executeMutation(mutation, variables) {
      const op = await this.$apollo.mutate({
        mutation,
        variables
        })

      return op.data.res
    },
  }
}
</script>

<style>
  .auth-button-container
  {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 1.6em;
  }

  .auth-button-container button {
    margin-bottom: 10px;
    width: fit-content;
  }

  .flexForm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .form-group {
    flex: 0 45%;
  }
  .suSuccess h1{
    text-align: center;
  }
  .suSuccess p {
    margin: 15px 50px !important;
  }

  .suSuccess p:first-of-type {
    margin-top: 20px !important;
  }
  
.suSuccess p span {
    color: #dc3545;
    text-decoration: underline;
  }
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
.hints ul li {
  color: red;
}
</style>
