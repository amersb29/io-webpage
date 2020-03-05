<template lang="html">
  <div>
    <section class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 centerContentColum">
          <h2 class="txtRed">Adquiere una de nuestras membresías</h2>
          <span>Ten acceso a cursos y conferencias exclusivas desde $1,249.00 MXN al mes</span>
        </div>
      </div>
      <div class="row margin-top-50">
        <!-- <ApolloQuery :query="require(`@/graphql/queries/Membresias.gql`)">
            <template v-slot="{ result: { loading, error, data } }">
                <div v-if="loading" class="loading apollo"><Loader/></div>
                <div v-if="error" class="error apollo">An error occurred</div>
                <div v-else-if="data">
                  <div v-for="membresia in data.memberships" :key="membresia.id" class="col-md-6 ">
                    <Membresia :type="membresia.name.toUpperCase()"
                              :price="membresia.price"
                              :currency="currency"
                              :benefits="getBenefits(membresia.name)"/>
                  </div>
                </div>
            </template>
        </ApolloQuery> -->
        <div class="col-md-6 centerContentColum">
          <Membresia
                    id="1" 
                    image="imagen-membresia-premium.png"
                    type="PREMIUM"
                    price="1249"
                    currency="MXN"
                    :benefits="beneficiosPremium"/>
        </div>
        <div class="col-md-6 centerContentColum">
          <Membresia
                    id="2" 
                    image="imagen-membresia-platinum.png"
                    type="PLATINUM"
                    price="2499"
                    currency="MXN"
                    :benefits="beneficiosPlatinum"/>
        </div>
      </div>
      <div class="row justify-content-center margin-top-100">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">PREMIUM</th>
                <th scope="col">PLATINUM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Programación de lunes a viernes en televisionobjetiva.com</td>
                <td><font-awesome-icon icon="check" class="txtRed"/></td>
                <td><font-awesome-icon icon="check" class="txtRed"/></td>
              </tr>
              <tr>
                <td>Curso intensivo</td>
                <td><font-awesome-icon icon="check" class="txtRed"/></td>
                <td><font-awesome-icon icon="check" class="txtRed"/></td>
              </tr>
              <tr>
                <td>50% de descuento en nuestros cursos, conferencias y documentales	</td>
                <td><font-awesome-icon icon="times" class="txtRed"/></td>
                <td><font-awesome-icon icon="check" class="txtRed"/></td>
              </tr>
              <tr>
                <td>Conferencia especial</td>
                <td>1 conferencia</td>
                <td>2 conferencias</td>
              </tr>
              <tr>
                <td>Sesión de preguntas y respuestas con Martín Aparicio</td>
                <td>1 sesion de preguntas y respuestas	</td>
                <td>2 sesiones de preguntas y respuestas</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <pre class="txtRed txtBold txtJustify">
¡ Por lanzamiento en $ 2499 MXN !
Promoción válida a las primeras
40 personas que se suscriban
a nuestra membresía PLATINUM.
</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row justify-content-center margin-top-100">
        <div class="col-md-6 centerContentColum">
          <h1 class="txtRed">PREGUNTAS FRECUENTES</h1>
          <h5>Siempre estamos para ti</h5>
        </div>
      </div>
      <div class="row margin-top-100">
        <div class="col-md-6 centerContentColum">
          <div class="faq-card">
            <h3 class="txtRed">¿Cómo realizo mi pago?</h3>
            <p class="txtJustify">
              Realiza tu pago por medio de PayPal, tarjeta de crédito o débito (OpenPay) o por depósito bancario. Envíanos tu comprobante a contacto@iobjetiva.com indicando tu nombre, teléfono, curso/membresía que compraste.
            </p>
          </div>
        </div>
        <div class="col-md-6 centerContentColum">
          <div class="faq-card">
            <h3 class="txtRed">¿Qué obtengo con la membresía?</h3>
            <p class="txtJustify">
              Podrás disfrutar de cursos y conferencias exclusivas para ti.
            </p>
            <p class="txtJustify">
              Mes a mes se irán cambiando los temas para que puedas seguir disfrutando de los beneficios de nuestras membresías.
            </p>
          </div>
        </div>
      </div>
      <div class="row margin-top-100">
        <div class="col-md-6 centerContentColum">
          <div class="faq-card">
            <h3 class="txtRed">¿Qué hago si no vi mi material?</h3>
            <p class="txtJustify">
              Si durante ese mes no lo reprodujiste, tendrás oportunidad de hacerlo durante el siguiente periodo(un mes), por lo tanto cada título tiene una vigencia máxima de permanecer en la plataforma de 2 meses. SIEMPRE Y CUANDO RENUEVES TU MEMBRESÍA Y NO HAYA SIDO REPRODUCIDO YA POR PRIMERA VEZ.
            </p>
          </div>
        </div>
        <div class="col-md-6 centerContentColum">
          <div class="faq-card">
            <h3 class="txtRed">¿Cuándo se realizan las sesiones de preguntas y respuestas?</h3>
            <p class="txtJustify">
              Las fechas de cada sesión será previamente anunciadas en nuestras páginas oficiales y mediante correo electrónico.
            </p>
          </div>
        </div>
      </div>
      <div class="row margin-top-100 justify-content-center margin-bottom-100">
        <div class="col-md-6 centerContentColum">
            <h3 class="txtRed">¿Tienes otra pregunta?</h3>
            <p class="txtJustify">
              Contáctanos y con gusto te apoyamos
            </p>
        </div>
      </div>
    </section>
    <section class="red_list margin-top-100">
      <Benefit text="Certificado de nuestros cursos"
               description="Obten una certificación por cada curso que termines"
               icon="bolt"/>
      <Benefit text="Conéctate desde tus dispositivos preferidos"
              description="Puedes ver desde cualquier dispositivo nuestros cursos y conferencias"
              icon="cloud"/>
      <Benefit text="Cuadernos de trabajo"
              description="Los cursos y conferencias incluidos en nuestras membresías, cuenta con un cuaderno de trabajo que podrás resolver para tu mejor comprensión del tema"
              icon="book"/>
      <Benefit text="Aprende a tu ritmo"
              description="Aprende donde quieres y cuando quieres"
              icon="clock"/>
    </section>
  </div>
</template>

<script>
import Benefit from '~/components/Benefit.vue'
import Membresia from '~/components/membresias/Membresia.vue'
import Loader from '@/components/Loader'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {Benefit, Membresia, Loader, FontAwesomeIcon},
  data(){
    return {
      beneficiosPlatinum: ['Programación de lunes a viernes en TelevisionObjetiva.com',
                           '2 conferencias especial',
                           '1 curso intensivo',
                           '2 sesiones de preguntas y respuestas con Martín Aparicio',
                           '<span class="txtRed">50% de descuento</span> en nuestros cursos, conferencias y documentales'
                         ],
      beneficiosPremium: ['Programación de lunes a viernes en TelevisionObjetiva.com',
                           '1 conferencia especial',
                           '1 curso intensivo',
                           '1 sesión de preguntas y respuestas con Martín Aparicio',
                         ]
    }
  },
  computed: {
    currency() {
      return +this.$store.getters.campusId === 1 ? 'MXN' : 'USD' 
    },
  },
  methods: {
    getBenefits( name ) {
      return this.$data[`beneficios${name.charAt(0).toUpperCase() + name.slice(1)}`]
    }
  }
}
</script>

<style scoped>
.lista-beneficios{
  text-align: left;
}
td, th{
  text-align: center;
}
td:first-child{
  text-align: left;
}
.faq-card{
  background-color: #eaeaea;
  border-radius: 10px;
  -webkit-box-shadow: 11px 17px 56px -12px rgba(0,0,0,0.46);
  -moz-box-shadow: 11px 17px 56px -12px rgba(0,0,0,0.46);
  box-shadow: 11px 17px 56px -12px rgba(0,0,0,0.46);
  height: 235px;
  padding: 25px;
  width: 90%;
}

.faq-card h3 {
  margin-bottom: 20px;
}
</style>
