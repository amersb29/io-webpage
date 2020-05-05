<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12">
        <h3>Sigue los siguientes pasos para armar tu membresía</h3>
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button 
                block href="#" 
                class="step-btn"
                v-b-toggle.accordion-1 
                variant="danger"> 
                Paso 1: Selecciona tu curso
              </b-button>
            </b-card-header>
            <b-collapse 
              accordion="my-accordion" 
              id="accordion-1" 
              role="tabpanel"
              visible 
            >
              <b-card-body class="stepAcordion_body">
                <b-card-group columns>
                  <b-card
                    img-alt="Image"
                    img-src="http://rest-io.test/storage/images/imagen-errores-asfixian-pareja.jpg"
                    overlay
                    text-variant="white"
                  >
                    <b-card-title class="stepAcordion_card__title">
                      Errores que asfixian a la pareja
                    </b-card-title>
                  </b-card>
                </b-card-group>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2 variant="danger" class="step-btn">
                Paso 2: Selecciona tus conferencias
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body class="stepAcordion_body">
                <b-card-group columns>
                  <b-card
                    img-alt="Image"
                    img-src="http://rest-io.test/storage/images/imagen-errores-asfixian-pareja.jpg"
                    overlay
                    text-variant="white"
                  >
                    <b-card-title class="stepAcordion_card__title">
                      Errores que asfixian a la pareja
                    </b-card-title>
                  </b-card>
                </b-card-group>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-3 variant="danger" class="step-btn">
                Paso 3: Confirma tu selección y Realiza tu pago
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body class="stepAcordion_body">
                <b-card-group columns>
                  <b-card
                    img-alt="Image"
                    img-src="http://rest-io.test/storage/images/imagen-errores-asfixian-pareja.jpg"
                    overlay
                    text-variant="white"
                  >
                    <b-card-title class="stepAcordion_card__title">
                      Errores que asfixian a la pareja
                    </b-card-title>
                  </b-card>
                  <b-card
                    img-alt="Image"
                    img-src="http://rest-io.test/storage/images/imagen-errores-asfixian-pareja.jpg"
                    overlay
                    text-variant="white"
                  >
                    <b-card-title class="stepAcordion_card__title">
                      Errores que asfixian a la pareja
                    </b-card-title>
                  </b-card>
                  <b-card
                    img-alt="Image"
                    img-src="http://rest-io.test/storage/images/imagen-errores-asfixian-pareja.jpg"
                    overlay
                    text-variant="white"
                  >
                    <b-card-title class="stepAcordion_card__title">
                      Errores que asfixian a la pareja
                    </b-card-title>
                  </b-card>
                </b-card-group>
                <div ref="paypal" class="stepAcordion_card__paypalBtns"></div>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-4 variant="danger" class="step-btn">
                Paso 4: Realiza tu pago
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text class="stepAcordion_card__message">
                  <h3>¡¡¡Tu pago ha sido exitoso!!!</h3>
                  <div class="stepAcordion_card__message-profile">
                    <p>Haz</p>
                    <b-button variant="danger">Click Aquí</b-button>
                    <p>para acceder a tu Perfil e iniciar con tu formación mental</p>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.type)
  },
  created() {
    if (parseInt( this.$route.params.type) === 2) {
      this.beneficios.conferencias = 2
    }
  },
  mounted() {
    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?currency=${this.$store.state.currency}&client-id=${process.env.paypal_id}`
    script.addEventListener('load', this.setLoaded)
    document.body.appendChild(script)
  },
  data: () => ({
    membresia: {
      precio: 1249,
      descripcion: "Membresía Premium",
      beneficios: {
        curso: 1,
        conferencias: 1
      },
    },
    curso: {},
    conferencias: []
  }),
  computed: {
    name() {
      console.log(this.$route.params.type);
      
      switch ( parseInt( this.$route.params.type) ) {
        case 1:
          return 'Premium'
        default:
          return 'Platinum'
      }
    }
  },
  methods: {
    setLoaded() {
      // https://developer.paypal.com/docs/checkout/best-practices/smart-payment-buttons/
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.membresia.descripcion,
                  amount: this.membresia.precio
                }
              ]
            })
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
              // TODO: Registrar la compra (usuario::id)
              //       Asociar los productos a la compra (producto::id, compra::id) 
              // TODO: Registrar pago (usuario::id, compra::id, metodoPago::id, total)
              // TODO: Actualizar la información del usuario si pagó membresía (activo, tipo_membresía)
              //       Asignar los productos al usuario
              // TODO: Mostrar modal con los productos comprados
              debugger
              // This function shows a transaction success message to your buyer.
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }
        })
        .render(this.$refs.paypal)
    }
  }
}
</script>

<style>
.step-btn {
  text-align: left;
}
.stepAcordion_body {
  max-height: 700px;
  overflow-y: scroll;
}
.stepAcordion_card__title {
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  font-size: 1rem;
  left: 0;
  margin: 0px;
  padding: 10px;
  position: absolute;
  right: 0;
  text-align: justify;
}
.stepAcordion_card__paypalBtns {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.stepAcordion_card__message {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.stepAcordion_card__message-profile {
  align-items: center;
  display: flex; 
  margin-top: 30px;
}
.stepAcordion_card__message-profile p {
  font-size: 1rem;
  margin: 0 5px;
}
</style>