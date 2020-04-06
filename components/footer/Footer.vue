<template>
  <div>
    <SubscriptionForm />
    <Mapa />
    <footer class="container-fluid">
      <div class="container">
        <div class="row justify-content-around margin-top-50">
          <FooterList v-for="list in footerLists" 
                      :key="list.title"
                      :listTitle="list.title"
                      :listItems="list.items"
                      :isUlList="list.isUlList"/>
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
import SubscriptionForm from './SubscriptionForm'
import FooterList from './FooterList';
import Mapa from './Map';

export default {
  components: {SubscriptionForm, FooterList, Mapa},
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
              text: 'contacto@iobjetiva.com',
              href: 'mailto:contacto@iobjetiva.com'
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
              text: 'InteligenciaObjetivaMx',
              applyPadding: true,
              href: 'https://www.facebook.com/InteligenciaObjetivaMx'
            },
            {
              icon: ['fab','youtube'],
              text: 'InteligenciaObjetivaMx',
              applyPadding: true,
              href: 'https://www.youtube.com/channel/UC2Hh4LQmMHAxyZ6mX1t1bPA'
            },
            {
              icon: ['fas','desktop'],
              text: 'televisionobjetiva.com',
              applyPadding: true,
              href: 'https://televisionobjetiva.com/'
            },
            {
              icon: ['fab','facebook-square'],
              text: 'televisionobjetivamx',
              applyPadding: true,
              href: 'https://www.facebook.com/TelevisionObjetivaMx/'
            },
          ]
        },
        {
          title: 'Categorías',
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
