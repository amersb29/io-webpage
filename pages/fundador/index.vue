<template lang="html">
  <div>
    <section class="container">
      <div class="row justify-content-center margin-top-100">
        <div class="col-md-6">
          <img src="~/assets/img/imagen_fondo_fundador.jpg" class="fundador-img"/>
        </div>
        <div class="col-md-6  txtJustify">
          <p>
            Filósofo, conferencista, locutor, periodista, investigador y escritor, por más de 20 años se ha dedicado al estudio de la mente y la conciencia de sí en el ser humano. Motivado por ver el deterioro social en el que vivimos como la ola de familias disfuncionales, las adicciones, la pobreza, el estrés del ambiente laboral, la delincuencia, los problemas de pareja, etc. dirige todas sus investigaciones a encontrar el origen del problema para encontrar alguna solución.
          </p>
          <p>
            Descubre que el único mal que arrastra al ser humano a tener una serie de conductas equivocadas con las que pierde su calidad de vida, es la pérdida de control sobre sus emociones tanto positivas como negativas. Martin Aparicio hace más de veinte años, desarrolla un sistema de autoconocimiento llamado “Inteligencia Objetiva”. Este sistema lleva al ser humano a comprenderse a sí mismo, a una evolución mental evidente y palpable con la que inevitablemente incrementa su calidad de vida al no seguir permitiendo que sus emociones positivas o negativas dirijan su vida, si no que esas decisiones sean tomadas de forma consciente. Evidentemente cuando una persona toma decisiones conscientes, no puede caer en drogas, obesidad, pobreza o malas relaciones laborales, sociales o de pareja.
          </p>
          <p>
            Con este sistema de pensamiento, Inteligencia Objetiva busca mejorar la vida en sociedad, a través de elevar en cada individuo la capacidad de autoconciencia, de trascender los estados emocionales que merman la calidad de vida, de la orientación en la correcta educación de los hijos y en cómo llevar relaciones de pareja, familiares y sociales óptimas y en armonía.
          </p>
        </div>
      </div>
      <div class="row justify-content-center margin-top-100 margin-bottom-100">
        <div class="col-md-10">
          <iframe class="mySlidess" src="https://player.vimeo.com/video/199081201" style="width:100%" width="440" height="400" frameborder="0"></iframe>
        </div>
      </div>
    </section>
    <Frase frase='“NO IMPORTAN LOS HECHOS, SI NO EL PORQUÉ DE LOS HECHOS”' />
  </div>
</template>

<script>
import Frase from '~/components/Frase.vue'

export default {
  components: {Frase}
}
</script>

<style lang="css">
.fundador-img{
  width: 100%;
}
</style>
