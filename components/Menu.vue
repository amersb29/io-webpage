
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
      <div id="secondMenu">
        <b-nav >
          <b-nav-item class="shopping-cart"><fa icon="shopping-cart"/><span>(0)</span></b-nav-item>
          <b-nav-item>
            <a @click.prevent="showModal()" href="#">Iniciar Sesi&oacute;n</a>
          </b-nav-item>
          <b-nav-item><span class="btn-rojo">Reg&iacute;strate</span></b-nav-item>
        </b-nav>
      </div>


    </div>
    <div id="lateral-menu">
      <span>
        ELIGE TU CIUDAD >
      </span>
      <ApolloQuery :query="require(`@/graphql/queries/Sedes.gql`)">
        <template v-slot="{ result: { loading, error, data } }">
            <!-- <div v-if="loading" class="loading apollo">Loading...</div> -->
            <div v-if="error" class="error apollo">An error occurred</div>
            <div v-else-if="data">
              <ul>
                <li v-for="sede in data.sedes" :key="sede.id">
                  <a :class="sedeClassObj(sede.id)" @click="cambiarSede(sede.id)">{{sede.name}}</a>
                </li>
              </ul>
            </div>
            <div v-else class="no-result apollo">No result :(</div>
        </template>
        </ApolloQuery>
    </div>
    <b-modal id="login" title="Iniciar de sesión" size="lg" hide-header hide-footer class="centerContentColum">
      <div>
        <!-- <img src="~/assets/img/imagen-entrar.jpg" style="width: 100%"/> -->
      </div>
      <h5>Inicia sesi&oacute;n para disfrutar de nuestros cursos.</h5>
      <b-form>
        <b-form-group id="exampleInputGroup1"
                    label="Correo electrónico:"
                    label-for="correo">
            <b-form-input id="email" type="email" placeholder="Ingresa Correo electrónico" required/>
        </b-form-group>
        <b-form-group id="exampleInputGroup1"
                    label="Correo electrónico:"
                    label-for="contrasenia">
            <b-form-input id="contrasenia" type="password" placeholder="Contraseña" required/>
        </b-form-group>
        <b-button type="submit" variant="danger">Enviar</b-button>
        <div>
          <a href="#" class="txtRed">OLVIDÉ MI CONTRASEÑA</a>
        </div>
      </b-form>
    </b-modal>
    <!-- <b-modal id="login" title="Iniciar de sesión" size="lg" hide-header hide-footer class="centerContentColum">
      <div class="centerContentRow">
        <div style="background-color: #f90; height: auto;">
          <img src="~/assets/img/imagen-registro.jpg" width="100%" height="100%"/>
        </div>
        <div>
          <div>
            <img src="~/assets/img/logo_io_ventanas.png" />
          </div>
          <h5>Regístrate gratis para disfrutar de nuestros cursos.</h5>
          <b-form>
            <b-form-input id="nombre" type="text" placeholder="Ingrese su Nombre" required/>
            <b-form-input id="correo" type="email" placeholder="Ingrese su Correo" required/>
            <b-form-input id="pwdSignup" type="password" placeholder="Ingrese Contraseña" required/>
            <b-form-input id="telefono" type="text" placeholder="Teléfono" required/>

            <b-button type="submit" variant="danger">Crear Cuenta</b-button>
          </b-form>
        </div>
      </div>
    </b-modal> -->
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default{
  components: {Logo},
  methods: {
    cambiarSede( id ){
      this.$store.commit('updateCampusId', id)
    },
    showModal () {
      this.$root.$emit('bv::show::modal', 'login')
    },
    sedeClassObj( sedeId ) {
      return { selected: +sedeId === +this.campusId }
    }
  },
  computed: {
    campusId() {
      return this.$store.getters.campusId
    },
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
   position: absolute;
   right: 15px;
   top: 40px;
}

#lateral-menu{
  position: absolute;
  display: flex;
    align-items: flex-start;
    flex-direction: column;
  right: -40px;
  top: 200px;
}

#lateral-menu span{
  border: 1px solid black;
  color: red;
  display: block;
  font-weight: bold;
  padding: 5px 10px;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
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
  margin-right: 5px;
}
.shopping-cart{
  display: block;
  margin-left: 60px;
}
.nav-link, .nav-link a {
  color: black !important;
  padding: 0.5rem .7rem !important;
  text-decoration: none;
}

</style>
