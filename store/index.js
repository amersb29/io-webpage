import country from '../graphql/queries/Country.gql'

export const state = () => ({
    access_token: null,
    authMode: 'signIn',
    campusId: 1, //México
    campusCode: null,
    shoppingCart: []
})

export const mutations = {

    updateCart(state, cart) {
        state.shoppingCart = cart
    },
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
    shoppingCart: state => state.shoppingCart,
    shoppingCartSize: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + b.counter, 0) : 0,
    shoppingCartTotal: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + (b.counter * b.price), 0) : 0,
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
    addProduct({commit, state}, {id, name, image, tipoProducto: { price }}) {
        const sc = [...state.shoppingCart]
        const prodIdx = sc.findIndex(product => product.id === id)
        
        if(prodIdx !== -1) {
            const prod = {...state.shoppingCart[prodIdx]}
            sc.splice(prodIdx, 1, {...prod, counter: ++prod.counter})
        } else {
            sc.push({id, name, image, price, counter: 1})
        }

        commit('updateCart', sc)
    },
    removeProduct({commit, state}, id) {
        const sc = state.shoppingCart.filter(product => product.id !== id)
        commit('updateCart', sc)
    },
    incrementCounter({commit, getters}, {id, counter}) {
        const sc = [...getters.shoppingCart]
        const prodIdx = sc.findIndex(product => product.id === id)
        sc.splice(prodIdx, 1, {...{...sc[prodIdx]}, counter: counter})
        commit('updateCart', sc)
    },
}