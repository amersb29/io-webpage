import gql from 'graphql-tag'

export const state = () => ({
    campusId: 1, //México
    campusCode: null
})

export const mutations = {
    changeCampus(state, {id, code}){
        state.campusCode = code
        state.campusId = id
    },
    updateCampusId(state, id){
        state.campusId = id
    }
}

export const getters = {
    campusId: state => state.campusId 
}

export const actions = {
    async queryCampus({commit, getters}){
        const apollo_client = this.app.apolloProvider.defaultClient
        const res = await apollo_client.query({
            query: gql`
              query($id: ID!){
                country(id: $id ){
                  id
                  code
                }
              }
            `,
            variables: {
              id: getters.campusId
            }
          })

        if(res.data.country){
            commit('changeCampus', {id: +res.data.country.id, code: res.data.country.code} )
        }
    }
}