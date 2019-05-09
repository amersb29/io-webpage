<template>
  <div id="slider" class="centerContentColum margin-bottom-100">
    <hooper ref="carousel" :infiniteScroll="true" :touchDrag="false">
      <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
      <slide>
        <Experience name="Victor Flores"
                    comment="Este método de enseñanza a distancia es muy bueno, ya que me permite organizar mejor mis actividades y acomodar la hora en que puedo dedicarle tiempo de estudio a la enseñanza de Martín. También puedo ver los videos en casa o bien cuando estoy de viaje. Además, pienso que todo este conocimiento es muy útil para mi crecimiento interno y aparte es muy ameno."
                    avatar="Foto_victor_flores.jpg"/>
      </slide>
      <slide>
        <Experience name="Keila Merodio"
                    comment="Me siento cada vez mejor esutiando aquí y observando en la vida diaria como voy aplicando el conocimiento adquirido. Ha sido trascendental para mi porque por primera vez comencé a tener convicción de lo que hago y a darle un cambio y sentido a mi vida."
                    avatar="Foto_Keila_meriondo.jpg"/>
      </slide>
      <slide>
        <Experience name="Carlos López"
                    comment="Puedo ir a las conferencias de Martín o a ver directamente la retransmisión de cualquiera de ellas. Me conecto desde internet para tomar los programas, aprendo y hago repasos todo el tiempo. El conocimiento de Martín es único, si aplicas su saber y su método te transformarás para hacer de ti el mejor ser que podrás llegar a ser."
                    avatar="Foto_Carlos_lopez.jpg"/>
      </slide>
      <slide>
        <Experience name="Angélica Ruiz"
                    comment="Satisfacción total con inteligencia objetiva. Me ha dado nuevos ojos para mirar nuevas y fascinantes perspectivas."
                    avatar="Foto_angelica_flores.jpg"/>
      </slide>
    </hooper>
    <img
      src="~/assets/img/Arrow_right_seccion_testimonios.png"
      alt="Siguiente"
      @click="slideNext">
  </div>
</template>
<script>
import 'hooper/dist/hooper.css';
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import Experience from './Experience.vue'

export default {
  components: {Experience, Hooper, Slide, HooperPagination},
  methods: {
    slideNext() {
      this.$refs.carousel.slideNext();
    }
  }
}
</script>
<style lang="css" scoped>
  #slider section{
    height: 455px;
  }
  #slider img{
    cursor: pointer;
    margin-top: 25px;
  }
  .hooper-indicator {
    background-color: gray;
  }
  .hooper-indicator is-active{
    background-color: red;
  }
</style>
