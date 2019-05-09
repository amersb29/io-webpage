
<template>
  <section id="ioMenu">
    <Logo />
    <div class="menuOptions">
      <b-nav>
        <b-nav-item to="/" active>Inicio</b-nav-item>
        <b-nav-item to="/conocenos">Con&oacute;cenos</b-nav-item>
        <b-nav-item to="/fundador">Fundador</b-nav-item>
        <b-nav-item-dropdown id="nav7_ddown" text="Catálogo" extra-toggle-classes="nav-link-custom" left>
          <b-dropdown-item to="/cursos/1">CURSOS EN L&Iacute;NEA</b-dropdown-item>
          <b-dropdown-item to="/cursos/2">CONFERENCIAS EN L&Iacute;NEA</b-dropdown-item>
          <b-dropdown-item to="/cursos/5">DOCUMENTALES</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item to="/cursos/6"><span class="txtRed">CONTENIDO GRATUITO</span></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Cursos Presenciales</b-nav-item>
        <b-nav-item to="/membresias">Membres&iacute;as</b-nav-item>
        <b-nav-item href="https://televisionobjetiva.com/">TelevisionObjetiva</b-nav-item>

      </b-nav>
      <div id="secondMenu">
        <b-nav >
          <b-nav-item class="shopping-cart"><i class="fas fa-shopping-cart"></i><span>(0)</span></b-nav-item>
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
      <ul>
        <li><a>México</a></li>
        <li><a>Los Ángeles</a></li>
        <li><a>Phoenix</a></li>
        <li><a>San Diego</a></li>
      </ul>
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
    showModal () {
      this.$root.$emit('bv::show::modal', 'login')
    }
  }
}
</script>

<style scoped>
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
  list-style: none;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 80px;
}
#lateral-menu ul li{
  font-size: .7em;
  height: 20px;
}
#lateral-menu ul li a {
  cursor: pointer;
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
.b-nav-item a{
  color: black !important;
}
</style>
