<!-- https://bootstrap-vue.js.org/docs/components/carousel -->
<template>
  <div  >
    <b-container fluid>
      <div class="row">
        <div class="col-md-12 centerContentColum">
          <h1 class="txtRed">INTELIGENCIA OBJETIVA</h1>
          <h5>ESCUELA DEL PENSAMIENTO</h5>
        </div>
        <div class="col-md-4 alignItemsAtCenter alignItemsToRight">

            <h5 style="letter-spacing: 5px;">BIENVENIDO</h5>
            <div style="position: absolute; bottom: 0; left: 50px; display: flex; flex-direction: column;">
              <ul id="redesSociales">
                <li>
                  <a href="#">
                    <img src="~/assets/img/icono_facebook_header.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="~/assets/img/icono_youtube_header.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="~/assets/img/Icono_instagram_header.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="~/assets/img/Icono_whatsapp_header.png" alt="">
                  </a>
                </li>
              </ul>

              <span style="font-size: .7em; text-decoration: underline;">Síguenos en nuestras redes sociales</span>
            </div>
        </div>
        <div class="col-md-4">
          <div class="head-background">
            <img src="~/assets/img/Circulo-fondo-cabeza.png" />
          </div>
        </div>
        <div class="col-md-3 alignItemsAtBottom alignItemsToLeft txtJustify" style="font-size: .7em;">

          <h6>Evoluciona tu mente</h6>

          <p>
            Queremos ayudarte a liberarte del sufrimiento. Transformar tu vida, tus finanzas, tu carrera, tu salud y todas
            las áreas que te ayuden a llegar a tu mejor versión.
          </p>
          <b-button variant="danger" size="sm">Regístrate y conócenos</b-button>
          <br/>
          <p>
            ¡Toma acción YA!
          </p>
          <p>
            Al registrarte recibirás acceso a los videos de los 5 puntos que te ayudarán a transformar tu vida.
          </p>
        </div>
      </div>
      <b-row>
        <b-col md="5" offset-md="1" class="centerContentColum">
          <img src="~/assets/img/borrar/QueEsIo_video.png" width="100%">
          <!-- <iframe class="mySlides" src="https://player.vimeo.com/video/291983809" frameborder="0" allowfullscreen ></iframe> -->
        </b-col>
        <b-col md="5" offset-sd="1" class="contentAtTheEnd">
          <h5>¿Qu&eacute; es Inteligencia Objetiva?</h5>
          <p class="txtJustify">
            Acabas de encontrar el sistema de pensamiento que te abrirá los ojos hacia el mundo real,
            haremos que veas la vida tal y cómo es y no como te enseñaron que era, aprenderás que el
            sufrimiento en cualquier situación de vida puede ser trascendido sin volverte por ello una
            persona fría, por el contrario, te convertirás en alguien fuerte, estable y un pilar para
            tu entorno.</p>
          <p class="txtJustify">Al estudiar con nosotros podrás mejorar tus relaciones personales, quitarte
            los miedos, adquirir seguridad y desarrollarte para alcanzar una vida de mayor nivel y calidad,
            además de formar parte de un grupo cada vez más grande de personas capaces de orientar y actuar
            en pro de la mejora social.</p>
          <a href="#" class="txtRed">
            Ver más

            <i class="fa fa-plus-circle fa-xs txtRed"/>
          </a>
        </b-col>
      </b-row>
      <b-row class="margin-top-100 " >
        <b-col class="graySection padding-bottom-100">
          <b-row class="margin-top-100" style="background-color: #eaeaea;">
            <b-col md="10" offset-md="2">
              <b-row style="margin-top: 0">
                <b-col md="6">
                  <h3>Siempre tenemos algo m&aacute;s para ti</h3>
                  <span class="txtBold">Contamos con distintas categor&iacute;as para tu desarrollo</span>
                </b-col>
                <!-- <b-col md="4" offset-md="1" id="seccionMoneda">
                  <h6 class="txtRed">Selecciona tu tipo de moneda</h6>
                  <div class="dropdown">
                     <b-dropdown text="MONEDA" variant="outline-dark" class="m-2">
                       <b-dropdown-item href="#">MXN</b-dropdown-item>
                       <b-dropdown-item href="#">USD</b-dropdown-item>
                     </b-dropdown>
                  </div>
                </b-col> -->
              </b-row>
            </b-col>
          </b-row>
          <b-row style="height: 600px;" class="centerContentColum">
            <b-col md="10">
              <div id="catalogo-grid">
                <div>
                  <img src="../assets/img/Imagen_conferencias_en_linea.jpg" alt="Conferencias en línea">
                  <!-- <Card title="Conferencias en línea"
                    link="conferencias_linea"
                    price="699"
                    image="Imagen_conferencias_en_linea.jpg"
                    height="lg" /> -->
                </div>
                <!-- <div>&nbsp;</div> -->
                <div>
                  <img src="../assets/img/imagen_cursos_en_linea.jpg" alt="Cursos en línea">
                </div>
                <!-- <div>&nbsp;</div> -->
                <div>
                  <img src="../assets/img/Imagen_Documentales.jpg" alt="Documentales">
                </div>
                <!-- <div>&nbsp;</div> -->
                <div>
                  <img src="../assets/img/Imagen_conferencias_presenciales.jpg" alt="Conferencias presenciales" >
                </div>
                <!-- <div>&nbsp;</div> -->
              </div>
              <!-- <div class="lt-grid-container">
                <div style="grid-column-start: 1; grid-row-start: 1; ">
                  <Card title="Conferencias en línea"
                    link="conferencias_linea"
                    price="699"
                    image="Imagen_conferencias_en_linea.jpg"
                    height="lg" />
                </div>
                <div style="grid-column-start: 2; grid-column-end: 3; grid-row-start: 1; ">
                  <Card title="Cursos en línea"
                                        link="cursos_linea"
                                        price="2,499"
                                        image="imagen_cursos_en_linea.jpg"
                                        height="sm"/>
                </div>
                <div style="grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; margin-left: 45px;">
                  <Card title="Documentales"
                      link="documentales"
                      price="799"
                      image="Imagen_Documentales.jpg"
                      height="sm"/>
                </div>
                <div style="grid-column-start: 4; grid-column-end: 6; grid-row-start: 1;">
                  <Card title="Conferencias Presenciales"
                    link="presenciales"
                    price="400"
                    image="Imagen_conferencias_presenciales.jpg"
                    height="lg"/>
                </div>
              </div> -->
            </b-col>
          </b-row>
      </b-col>
    </b-row>


    <b-row class="red_list">
      <b-col md="3" offset-md="1">
         <Benefit text="Conéctate desde tus dispositivos preferidos"
                 description="Puedes ver desde cualquier dispositivo nuestros cursos y conferencias"
                 icon="cloud"/>
      </b-col>
      <b-col md="3">
        <Benefit text="Aprende a tu ritmo"
                description="Aprende donde quieres y cuando quieres"
                icon="clock"/>
      </b-col>
      <b-col md="3">
        <Benefit text="Cuadernos de trabajo"
                description="Los cursos y conferencias incluidos en nuestras membresías, cuenta con un cuaderno de trabajo que podrás resolver para tu mejor comprensión del tema"
                icon="book"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8" offset-md="2">
        <div class="txtCenter">
          <h3>CONOCE LA EXPERIENCIA DE NUESTROS ESTUDIANTES</h3>
          <h5>AL IGUAL QUE ELLOS PUEDES FORMAR PARTE DE LA EVOLUCIÓN</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" offset-md="3">
        <Testimonio />
      </b-col>
    </b-row>
    </b-container>

    <Frase frase='“CUANDO EL HOMBRE INCREMENTA SU COMPRENSIÓN, EL MAL SE DESVANECE”'/>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import Benefit from '~/components/Benefit.vue'
import Testimonio from '~/components/testimonios/Testimonio.vue'
import Frase from '~/components/Frase.vue'

export default{
  components: {Benefit, Card, Testimonio, Frase},
  mounted(){
    this.$store.dispatch('queryCampus')
  }
}
</script>

<style>
#catalogo-grid
{
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(5, 20%); 
  grid-gap: 3px;
  overflow: hidden;
}

#catalogo-grid div
{
  position: relative;
  width: 100%;
}

#catalogo-grid div img
{
  margin: 0;
  width: inherit;
}

#catalogo-grid div:first-child
{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
}

#catalogo-grid div:nth-of-type(2)
{
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}

#catalogo-grid div:nth-of-type(3)
{
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}

#catalogo-grid div:nth-of-type(2) img,
#catalogo-grid div:nth-of-type(3) img
{
  height: 216px;
}

#catalogo-grid div:nth-of-type(1) img,
#catalogo-grid div:nth-of-type(4) img
{
  height: 530px;
}

#catalogo-grid div:nth-of-type(4)
{
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 4;
}

#redesSociales{
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 5px;
  padding: 0;
}

#redesSociales li{
  margin: 0 7px;
}

#seccionMoneda{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
}

.graySection{
  background-color: #eaeaea;
}

.mySlides{
  display: block;
  width: inherit;
  height: 100vh;
  max-width: 640px;
  max-height: 360px;
}
.row{
  margin-top: 60px;
}

  .head{
    max-width: 100%;
    height: auto;
  }
  .experiencia{
    display: block;
    height: 600px;
  }

</style>
