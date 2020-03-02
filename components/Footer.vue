<template>
  <div>
    <SubscriptionForm />
    <section style="height: 400px; background-color: blue;">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.521197599433!2d-99.1771475850933!3d19.43308298688401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b315c1c99b%3A0xb2e23496e8159340!2sGutemberg+89%2C+Anzures%2C+11590+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses-419!2smx!4v1541117733469" height="400" frameborder="0" style="border:0; width: 100%" allowfullscreen></iframe>
    </section>
    <footer class="container-fluid">
      <div class="container">
        <div class="row justify-content-around margin-top-50">
          <FooterList v-for="list in footerLists" 
                      :key="list.title"
                      :listTitle="list.title"
                      :listItems="list.items"
                      :isUlList="list.isUlList"
                      :applyPadding="list.applyPadding"/>
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
import FooterList from './FooterList';

export default {
  components: {FontAwesomeIcon, SubscriptionForm, FooterList},
  data(){
    return {
      footerLists: [
        {
          title: 'Contáctanos',
          items: [
            {
              icon: ['fas','phone'],
              text: '55 6363 0050 / 55 4632 5118'
            },
            {
              icon: ['fab','whatsapp'],
              text: '55 1951 4412'
            },
            {
              icon: ['fas','envelope'],
              text: 'contacto@iobjetiva.com'
            },
            {
              icon: ['fas','map-marker-alt'],
              text: 'Gutenberg 89, col. Anzures. Ciudad de México'
            },
          ]
        },
        {
          title: 'Ligas',
          items: [
            {
              icon: ['fab','facebook-square'],
              text: '/InteligenciaObjetivaMx',
              applyPadding: true
            },
            {
              icon: ['fab','youtube'],
              text: 'InteligenciaObjetivaMx',
              applyPadding: true
            },
            {
              icon: ['fab','facebook-square'],
              text: '/televisionobjetivamx',
              applyPadding: true
            },
            {
              icon: ['fas','desktop'],
              text: 'televisionobjetiva.com',
              applyPadding: true
            },
          ]
        },
        {
          title: 'Categorías',
          isUlList: true,
          items: [
            {
              to: '/catalogo/1',
              text: 'Cursos en línea'
            },
            {
              to: '/cursos_presenciales',
              text: 'Cursos Presenciales'
            },
            {
              to: '/catalogo/2',
              text: 'Conferencias en línea'
            },
            {
              to: '/catalogo/5',
              text: 'Documentales'
            },
            {
              to: '/membresias',
              text: 'Membresías'
            },
            {
              to: '/contenido_gratuito',
              text: 'Contenido gratuito'
            },
            {
              to: '/libro',
              text: 'Libro Conciencia de Sí'
            },
          ]
        },
        {
          title: 'Conócenos',
          isUlList: true,
          items: [
            {
              to: '/nosotros',
              text: 'Nosotros'
            },
            {
              to: '/fundador',
              text: 'Fundador'
            },
          ]
        },
      ]
    }
  }
}
</script>

<style lang="css">
footer{
  background-color: #363636;
  padding: 30px 0;
}
.padding-top-30{
  padding-top: 30px;
}
.aviso-de-privacidad a{
  text-decoration: none;
  color: #D63D37;
}
</style>
