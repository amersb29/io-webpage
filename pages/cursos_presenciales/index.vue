<template>
  <div>
    <b-container class="container">
        <b-row class="justify-content-center">
            <b-col class="col-md-7 centerContentColum">
                <h2 class="txtRed">Pr&oacute;ximos Cursos</h2>
                <span>Selecciona una Sede</span>
                <div class="margin-top-20">
                    <!-- TODO Cambiar por el componente CountriesSelect -->
                    <ApolloQuery :query="require(`@/graphql/queries/Countries.gql`)">
                        <template v-slot="{ result: { loading, error, data } }">
                            <!-- <div v-if="loading" class="loading apollo">Loading...</div> -->
                            <div v-if="error" class="error apollo">An error occurred</div>
                            <div v-else-if="data">
                                <b-select v-model="campusId">
                                    <optgroup v-for="country in data.countries" :key="country.id" :label="country.name">
                                        <option v-for="sede in country.sedes" 
                                                :key="sede.id" 
                                                :value="sede.id">
                                            {{ sede.name }}
                                        </option>
                                    </optgroup>
                                </b-select>
                            </div>
                        </template>
                    </ApolloQuery>
                </div>
            </b-col>
        </b-row>
        <ApolloQuery :query="require(`@/graphql/queries/Sede.gql`)"
                        :variables="{ id: campusId }">
            <template v-slot="{ result: { loading, error, data } }">
                <div v-if="loading" class="loading apollo">
                    <Loader/>
                </div>
                <div v-else-if="error" class="error apollo">An error occurred</div>
                <div v-else-if="data">
                    <b-row class="justify-content-center">
                        <b-col>
                            <hooper class="presenciales" :infiniteScroll="true" :touchDrag="false" :centerMode="true"
                                    :autoPlay="true" :playSpeed="3500">
                                <slide v-for="banner in data.sede.banners" :key="banner.id">
                                    <img :src="getImage(banner.image)" 
                                            :alt="banner.image"/>
                                </slide>
                                <hooper-navigation slot="hooper-addons"></hooper-navigation>
                            </hooper>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <iframe :src="`https://calendar.google.com/calendar/embed?${data.sede.calendar}`" 
                                    style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
                        </b-col>
                    </b-row>
                </div>
                <div v-else class="no-result apollo">No result :(</div>
            </template>
        </ApolloQuery>
    </b-container>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import Loader from '@/components/Loader'

export default {
    components: {Hooper, Slide, HooperNavigation, Loader},
    data() {
        return {
        }
    },
    methods: {
        getImage(image) {
            return `${process.env.api_url}${process.env.storage_folder}${image}`
        }
    },
    computed: {
        campusId: {
            get: function() {
                return this.$store.getters.campusId
            },
            set: function( val ) {
                this.$store.commit('updateCampusId', val)
            }
        }
    }
}
</script>

<style>
.hooper-slide img {
    width: inherit;
}

.presenciales{
    min-height: 423px;
}
</style>