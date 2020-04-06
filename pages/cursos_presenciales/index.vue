<template>
  <div>
    <b-container class="container margin-bottom-100">
        <b-row class="justify-content-center">
            <b-col class="col-md-7 centerContentColum">
                <h2 class="txtRed">Pr&oacute;ximos Cursos</h2>
                <span>Selecciona una Sede</span>
                <div class="margin-top-20">
                    <CountriesSelect name="country_id" v-model="campusId" :state="true"/>
                </div>
            </b-col>
        </b-row>

        <banners-and-calendar :campusId="campusId"/>

    </b-container>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import CountriesSelect from '@/components/CountriesSelect'
import BannersAndCalendar from '@/components/sedes/BannersAndCalendar'

export default {
    components: { BannersAndCalendar, Loader, CountriesSelect },
    computed: {
        campusId: {
            get: function() {
                return this.$store.getters.campusId
            },
            set: function( val ) {
                // TODO: Cambiar la forma en que se almacena la sede en el estado con base en la consulta por IP
                this.$store.commit('updateCampusId', val)
            }
        }
    }
}
</script>
