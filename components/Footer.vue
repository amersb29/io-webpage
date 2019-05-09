<template>
  <div>
    <section id="suscripcion">
      <div class="container">
        <div>
          <h3 class="txtWhite">SUSCR&Iacute;BETE A NUESTRO BOLET&Iacute;N</h3>
          <span class="txtWhite">Y RECIBE INFORMACIÓN DE NUESTROS CURSOS ADEMÁS DE CONTENIDO Y PROMOCIONES EXCLUSIVAS</span>
        </div>
        <form class="row boletin form-group">
            <div class="col-3">
              <input type="text" class="form-control" id="nombre" placeholder="NOMBRE">
            </div>
            <div class="col-3">
              <input type="email" class="form-control" id="correo" placeholder="CORREO ELECTRÓNICO">
            </div>
            <div class="col-3">
              <input type="text" class="form-control" id="telefono" placeholder="TELÉFONO">
            </div>
            <div class="col-3">
              <b-button variant="dark">Suscribirme</b-button>
            </div>
        </form>
      </div>
    </section>
    <section style="height: 400px; background-color: blue;">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.521197599433!2d-99.1771475850933!3d19.43308298688401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b315c1c99b%3A0xb2e23496e8159340!2sGutemberg+89%2C+Anzures%2C+11590+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses-419!2smx!4v1541117733469" height="400" frameborder="0" style="border:0; width: 100%" allowfullscreen></iframe>
    </section>
    <footer class="container-fluid">
      <div class="container">
        <div class="row justify-content-around margin-top-50">
          <div class="col-md-3 txtWhite">
            <h2 class="h2-footer txtWhite">Cont&aacute;ctanos</h2>
            <div class="contacto">
              <i class="fas fa-phone contacto-icon"></i>
              <span>55 6363 0050 / 55 4632 5118</span>
            </div>
            <div class="contacto">
              <i class="fab fa-whatsapp contacto-icon"></i>
              <span>55 1951 4412</span>
            </div>
            <div class="contacto">
              <i class="fas fa-envelope contacto-icon"></i>
              <span>contacto@iobjetiva.com</span>
            </div>
            <div class="contacto">
              <i class="fas fa-map-marker-alt contacto-icon"></i>
              <span>Gutenberg 89, col. Anzures. Ciudad de México </span>
            </div>
          </div>
          <div class="col-md-3 txtWhite">
            <h2 class="h2-footer">Ligas</h2>
            <div class="contacto padding-footer-content">
              <i class="fab fa-facebook contacto-icon"></i>
              <span>/InteligenciaObjetivaMx</span>
            </div>
            <div class="contacto padding-footer-content">
              <i class="fab fa-youtube contacto-icon"></i>
              <span>InteligenciaObjetivaMx</span>
            </div>
            <div class="contacto padding-footer-content">
              <i class="fab fa-facebook contacto-icon"></i>
              <span>/televisionobjetivamx</span>
            </div>
            <div class="contacto padding-footer-content">
              <i class="fas fa-desktop contacto-icon"></i>
              <span>televisionobjetiva.com</span>
            </div>
          </div>
          <div class="col-md-3 txtWhite">
            <h2 class="h2-footer">Categorías</h2>
            <ul class="lista-footer">
              <li><nuxt-link to="/cursos_en_linea">Cursos en l&iacute;nea</nuxt-link></li>
              <li><a href="#">Cursos presenciales</a></li>
              <li><a href="#">Conferencias en l&iacute;nea</a></li>
              <li><a href="#">Documentales</a></li>
              <li><nuxt-link to="/membresias">Membres&iacute;as</nuxt-link></li>
              <li><a href="#">Contenido gratuito</a></li>
              <li><a href="#">Libro Conciencia de Sí</a></li>
            </ul>
          </div>
          <div class="col-md-3 txtWhite">
            <h2 class="h2-footer">Conócenos</h2>
            <ul class="lista-footer">
              <li><nuxt-link to="/nosotros">Nosotros</nuxt-link></li>
              <li><nuxt-link to="/fundador">Fundador</nuxt-link></li>
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
export default {
}
</script>

<style lang="css">
footer{
  background-color: #363636;
  padding: 30px 0;
}
#suscripcion{
  background-color: #dc3545;
  height: 230px;
  padding-top: 30px;
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
  margin-right: 15px;
}
.padding-top-30{
  padding-top: 30px;
}
.boletin{
  background-color: #dc3545;
  color: white;
}
.aviso-de-privacidad a{
  text-decoration: none;
  color: #dc3545;
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
  display: block;
  margin: 0 0 15px;
}
</style>
