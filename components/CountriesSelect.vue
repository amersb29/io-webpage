<template>
    <ApolloQuery :query="require(`@/graphql/queries/Countries.gql`)">
        <template v-slot="{ result: { loading, error, data } }">
            <!-- <div v-if="loading" class="loading apollo">Loading...</div> -->
            <div v-if="error" class="error apollo">An error occurred</div>
            <div v-else-if="data">
                <b-form-select @input="emitSedeId($event)" :name="name" v-model="value">
                    <template v-if="onlyCountries">
                        <b-form-select-option v-for="country in data.countries" :key="country.id" :value="country.id">
                            {{ country.name }}
                        </b-form-select-option>
                    </template>
                    <template v-else>
                        <b-form-select-option-group v-for="country in data.countries" :key="country.id" :label="country.name">
                            <b-form-select-option v-for="sede in country.sedes" 
                                    :key="sede.id" 
                                    :value="sede.id">
                                {{ sede.name }}
                            </b-form-select-option>
                        </b-form-select-option-group>
                    </template>
                </b-form-select>
            </div>
        </template>
    </ApolloQuery>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        onlyCountries: {
            type: Boolean,
            default: false
        },
        value: {
            type: Number,
            default: 0
        }
    },
    methods: {
        emitSedeId(event) {
            this.$emit('input', +event)
        }
    }
}
</script>

<style>

</style>