<template>
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
                        <Gallery :banners="data.sede.banners" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <Calendar :src="data.sede.calendar" />
                    </b-col>
                </b-row>
            </div>
            <div v-else class="no-result apollo">No result :(</div>
        </template>
    </ApolloQuery>
</template>

<script>
import Loader from '@/components/Loader'
import Gallery from '@/components/sedes/Gallery'
import Calendar from '@/components/sedes/Calendar'

export default {
    components: { Calendar, Gallery, Loader },
    props: {
        campusId: {
            type: Number,
            default: 1
        }
    },
}
</script>

<style>

</style>