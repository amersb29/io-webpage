<template>
  <div>
    <SubscriptionForm />
    <section style="height: 400px; background-color: blue;">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.521197599433!2d-99.1771475850933!3d19.43308298688401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b315c1c99b%3A0xb2e23496e8159340!2sGutemberg+89%2C+Anzures%2C+11590+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses-419!2smx!4v1541117733469" height="400" frameborder="0" style="border:0; width: 100%" allowfullscreen></iframe>
    </section>
    <footer class="container-fluid">
      <div class="container">
        <div class="row justify-content-around margin-top-50">
          <div class="col-md-3 txtWhite">
            <h2 class="h2-footer txtWhite">Cont&aacute;ctanos</h2>
            <div class="contacto">
              <font-awesome-icon :icon="['fas','phone']" class="contacto-icon"/>
              <span>55 6363 0050 / 55 4632 5118</span>
            </div>
            <div class="contacto">
              <font-awesome-icon :icon="['fab','whatsapp']" class="contacto-icon"/>
              <span>55 1951 4412</span>
            </div>
            <div class="contacto">
              <font-awesome-icon icon="envelope" class="contacto-icon"/>
              <span>contacto@iobjetiva.com</span>
            </div>
            <div class="contacto">
              <font-awesome-icon icon="map-marker-alt" class="contacto-icon"/>
              <span>Gutenberg 89, col. Anzures. Ciudad de México </span>
            </div>
          </div>
          <div class="col-md-3 txtWhite">
            <h2 class="h2-footer">Ligas</h2>
            <div class="contacto padding-footer-content">
              <font-awesome-icon :icon="['fab','facebook-square']" class="contacto-icon"/>
              <span>/InteligenciaObjetivaMx</span>
            </div>
            <div class="contacto padding-footer-content">
              <font-awesome-icon :icon="['fab','youtube']" class="contacto-icon"/>
              <span>InteligenciaObjetivaMx</span>
            </div>
            <div class="contacto padding-footer-content">
              <font-awesome-icon :icon="['fab','facebook-square']" class="contacto-icon"/>
              <span>/televisionobjetivamx</span>
            </div>
            <div class="contacto padding-footer-content">
              <font-awesome-icon icon="desktop" class="contacto-icon"/>
              <span>televisionobjetiva.com</span>
            </div>
          </div>
          <div class="col-md-3 txtWhite">
            <h2 class="h2-footer">Categorías</h2>
            <ul class="lista-footer">
              <li class="contacto"><nuxt-link to="/catalogo/1">Cursos en l&iacute;nea</nuxt-link></li>
              <li class="contacto"><nuxt-link to="/cursos_presenciales">Cursos presenciales</nuxt-link></li>
              <li class="contacto"><nuxt-link to="/catalogo/2">Conferencias en l&iacute;nea</nuxt-link></li>
              <li class="contacto"><nuxt-link to="/catalogo/5">Documentales</nuxt-link></li>
              <li class="contacto"><nuxt-link to="/membresias">Membres&iacute;as</nuxt-link></li>
              <li class="contacto"><a href="#">Contenido gratuito</a></li>
              <li class="contacto"><a href="#">Libro Conciencia de Sí</a></li>
            </ul>
          </div>
          <div class="col-md-3 txtWhite">
            <h2 class="h2-footer">Conócenos</h2>
            <ul class="lista-footer">
              <li class="contacto"><nuxt-link to="/nosotros">Nosotros</nuxt-link></li>
              <li class="contacto"><nuxt-link to="/fundador">Fundador</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-2 txtCenter">
            <p class="txtWhite">M&eacute;todos de pago</p>
            <img src="~/assets/img/metdos-de-pago-footer.png" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 txtWhite">
            &copy; Derechos Reservados: Inteligenciaobjetiva.2019
          </div>
          <div class="col-md-4 aviso-de-privacidad txtCenter">
            <nuxt-link to="/aviso_de_privacidad">Aviso de privacidad</nuxt-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SubscriptionForm from './SubscriptionForm'

export default {
  components: {FontAwesomeIcon, SubscriptionForm}
}
</script>

<style lang="css">
footer{
  background-color: #363636;
  padding: 30px 0;
}
.lista-footer{
  list-style: none;
  font-size: 1em;
  padding-left: 70px;
  text-align: left;
}
.lista-footer a {
  text-decoration: none;
  color: inherit;
}
.contacto-icon{
  display: inline-block;
  margin-right: 15px;
}
.padding-top-30{
  padding-top: 30px;
}
.aviso-de-privacidad a{
  text-decoration: none;
  color: #D63D37;
}
.padding-footer-content{
  padding-left: 40px;
}
.h2-footer{
  text-align: center;
  padding-left: 40px;
  margin-bottom: 35px;
}
.contacto{
  align-items: center;
  display: flex;
  margin: 0 0 15px;
}
</style>
