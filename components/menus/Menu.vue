
<template>
  <section id="ioMenu">
    <Logo />
    <div class="menuOptions">
      <b-nav>
        <b-nav-item to="/" active>Inicio</b-nav-item>
        <b-nav-item to="/nosotros">Nosotros</b-nav-item>
        <b-nav-item to="/fundador">Fundador</b-nav-item>
        <b-nav-item-dropdown id="nav7_ddown" text="Catálogo" extra-toggle-classes="nav-link-custom" left variant="dark">
          <b-dropdown-item to="/catalogo/1">CURSOS EN L&Iacute;NEA</b-dropdown-item>
          <b-dropdown-item to="/catalogo/2">CONFERENCIAS EN L&Iacute;NEA</b-dropdown-item>
          <b-dropdown-item to="/catalogo/3">DOCUMENTALES</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item to="/catalogo/6"><span class="txtRed">CONTENIDO GRATUITO</span></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/cursos_presenciales">Cursos Presenciales</b-nav-item>
        <b-nav-item to="/membresias">Membres&iacute;as</b-nav-item>
        <b-nav-item href="https://televisionobjetiva.com/">TelevisionObjetiva</b-nav-item>

      </b-nav>

      <AuthForm mode="signIn"/>
      <AuthForm mode="signUp"/>
      <AuthForm mode="restorePwd"/>

    </div>

    <div id="secondMenu">
        <b-nav>
          <b-nav-item class="shopping-cart" @click.prevent="validateToken">
            <font-awesome-icon icon="shopping-cart"/>
            <div class="cart-no-items">
              <span>{{scSize}}</span>
            </div>
          </b-nav-item>
          <b-nav-item v-show="isLogin">
            Hola <b>{{userFirstName}}</b>
          </b-nav-item>
          <b-nav-item v-show="isLogin">
            <span class="btn-rojo" @click="signOut">
              Cerrar Sesión
            </span>
          </b-nav-item>
          <b-nav-item v-show="!isLogin">
            <a @click.prevent="showModal('signIn')" href="#">
              Iniciar Sesi&oacute;n
            </a>
          </b-nav-item>
          <b-nav-item v-show="!isLogin">
            <span class="btn-rojo" @click="showModal('signUp')">
              Reg&iacute;strate
            </span>
          </b-nav-item>
        </b-nav>
      </div>
      
    <div id="lateral-menu">
      <span>
        ELIGE TU CIUDAD >
      </span>
      <ApolloQuery :query="require(`@/graphql/queries/Sedes.gql`)" :skip="skipQuery">
        <template v-slot="{ result: { loading, error, data } }">
            <div v-if="loading" class="loading apollo">Loading...</div>
            <div v-if="error" class="error apollo">An error occurred</div>
            <div v-else-if="data">
                <ul>
                <li v-for="sede in data.sedes" :key="sede.id">
                    <a :class="sedeClassObj(sede.id)" @click="cambiarSede(sede)">{{sede.name}}</a>
                </li>
                </ul>
            </div>
            <div v-else class="no-result apollo">No result :(</div>
        </template>
    </ApolloQuery>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import Logo from '@/components/Logo'
import AuthForm from '../auth/AuthForm'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
  components: { Logo, FontAwesomeIcon, AuthForm },
  data(){
    return {
      skipQuery: true
    }
  },
  mounted() {
    this.skipQuery = false
  },
  methods: {
    cambiarSede( {id, code, country} ){
      const currency = country.code === 'MX' ? 'MXN' : 'USD' 
      this.$store.dispatch('changeCampus', { id, code, currency })
    },
    showModal (mode) {
      this.$store.commit('changeAuthMode', mode)
      this.$root.$emit('bv::show::modal', mode)
    },
    sedeClassObj( sedeId ) {
      return { selected: +sedeId === +this.campusId }
    },
    signOut() {
      this.$store.dispatch('removeToken')
      if(this.$route.name !== 'index') {
        this.$router.replace({ path: '/' })
      }
    },
    validateToken() {
      if(this.$store.getters.access_token) {
        this.$router.replace({ path: '/shoppingCart' })
      } else {
        this.$store.commit('changeAuthMode', 'signIn')
        this.$bvModal.show('signIn')
      }
    }
  },
  computed: {
    campusId() {
      return this.$store.getters.campusId
    },
    isLogin() {
      return this.$store.getters.access_token !== null
    },
    scSize() {
      return this.$store.getters.shoppingCartSize
    },
    userFirstName() {
      return this.$store.getters.userFirstName
    }
  }
}
</script>

<style>
#ioMenu{
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 50px;
}

#secondMenu{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
   position: absolute;
   right: 15px;
   top: 40px;
}

#lateral-menu{
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  position: absolute;
  right: 0px;
  top: 200px;
  width: 110px;
  z-index: 1;
}

#lateral-menu span {
  border: 1px solid black;
  color: red;
  display: block;
  font-weight: bold;
  padding: 5px 10px;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  width: 175px;
}
#lateral-menu ul{
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 80px;
  padding-left: 10px;
}
#lateral-menu ul li{
  font-size: .7em;
  height: 20px;
}
#lateral-menu ul li a {
  cursor: pointer;
}

#lateral-menu ul li a.selected {
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-style: double;
}

.fa-shopping-cart{
  margin: 0 10px;
}
.shopping-cart .nav-link{
  display: flex;
  align-items: center;
  width: 100px;
}
.cart-no-items {
  align-items: center;
  border: 2px solid #dc3545;
  border-radius: 50%;
  color: #dc3545;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.1em;
  height: 30px;
  justify-content: center;
  text-align: center;
  width: 30px;
}
.nav-link, .nav-link a {
  color: black !important;
  padding: 0.5rem .7rem !important;
  text-decoration: none;
}
</style>
