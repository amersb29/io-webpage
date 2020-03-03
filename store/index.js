import country from '../graphql/queries/Country.gql'

export const state = () => ({
    access_token: null,
    authMode: 'signIn',
    campusId: 1, //México
    campusCode: null,
})

export const mutations = {
    changeAccessToken(state, newToken){
        state.access_token = newToken
    },
    changeAuthMode(state, newMode){
      state.authMode = newMode
    },
    changeCampus(state, {id, code}){
        state.campusCode = code
        state.campusId = id
    },
    updateCampusId(state, id){
        state.campusId = id
    }
}

export const getters = {
    access_token: state => state.access_token,
    campusId: state => state.campusId,
    isSignIn: state => state.authMode === 'signIn', 
    isSignUp: state => state.authMode === 'signUp', 
}

export const actions = {
    async queryCampus({commit, getters}){
        const apollo_client = this.app.apolloProvider.defaultClient
        const res = await apollo_client.query({
            query: country,
            variables: {
              id: getters.campusId
            }
          })

        if(res.data.country){
            commit('changeCampus', {id: +res.data.country.id, code: res.data.country.code} )
        }
    },
    // async executeMutation()
}