<template>
    <section id="suscription" class="fx-jcc-aic">
        <div v-if="subscriptionOK">
            <h3 class="txtWhite">¡Te has registrado con &eacute;xito!</h3>
            <span class="txtWhite">
                En breve recibirás un correo con las actualizaciones de nuestro contenido y 
                las fechas de nuestros próximos cursos.
            </span>
        </div>
        <div class="container" v-else>
            <div>
                <h3 class="txtWhite">SUSCR&Iacute;BETE A NUESTRO BOLET&Iacute;N</h3>
                <span class="txtWhite">Y RECIBE INFORMACIÓN DE NUESTROS CURSOS ADEMÁS DE CONTENIDO Y PROMOCIONES EXCLUSIVAS</span>
            </div>
            <form class="row boletin form-group" v-on:submit="mutate">
                <div class="col-3">
                    <b-input type="text" 
                            id="nombre" name="name" 
                            placeholder="NOMBRE" 
                            v-model="name" required />
                </div>
                <div class="col-3">
                    <b-input type="email" 
                            id="correo" name="email" 
                            placeholder="CORREO ELECTRÓNICO" 
                            v-model="email" required />
                </div>
                <div class="col-3">
                    <b-input type="text" 
                            id="telefono" name="phone" 
                            placeholder="TELÉFONO"
                            v-model="phone" />
                </div>
                <div class="col-3">
                    <b-button variant="dark" type="submit">Suscribirme</b-button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
    data() {
        return {
            subscriptionOK: false,
            name: '',
            email: '',
            phone: ''
        }
    },
    methods: {
        mutate(e) {
            e.preventDefault();
            this.$apollo.mutate({
                mutation: gql`
                    mutation(
                        $name: String!
                        $email: String!
                        $phone: String
                    ) {
                    res: createSubscriber(
                        input: {
                            name: $name
                            email: $email
                            phone: $phone
                        } ) 
                    {
                        id
                        name
                        email
                        phone
                    }
                }`,
                variables: {
                    name: this.name,
                    email: this.email,
                    phone: this.phone
                }
            }).then( data => {
                this.subscriptionOK = true
            }).catch( error => {
                console.log('Error')
            })
        }
    }
}
</script>

<style>
#suscription {
    background-color: #D63D37;
    height: 230px;
}

.boletin {
    background-color: #D63D37;
    color: white;
}
</style>