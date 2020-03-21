import country from '../graphql/queries/Country.gql'

export const state = () => ({
    access_token: null,
    authMode: 'signIn',
    campusId: 1, //México
    campusCode: 'CDMX',
    currency: 'MXN',
    discount: 0,
    shoppingCart: [],
    user: null,
})

export const mutations = {
    updateCart(state, cart) {
        state.shoppingCart = cart.sort((a, b) => {
            return a.type < b.type ? -1 : 1 
        })

        sessionStorage.setItem('shopping-cart', JSON.stringify(state.shoppingCart))

        if(!cart.length) {
            state.discount = 0
        }
    },
    changeAccessToken(state, newToken){
        sessionStorage.setItem('apollo-token', newToken)
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
    },
    updateCurrency(state, newCurrency) {
        state.currency = newCurrency
    },
    updateDiscount(state, discount){
        state.discount = discount
    },
    updateUser(state, newUser) {
        sessionStorage.setItem('user-info', JSON.stringify(newUser))
        state.user = newUser
    }
}

export const getters = {
    access_token: state => state.access_token,
    campusId: state => state.campusId,
    discount: state => state.discount,
    isSignIn: state => state.authMode === 'signIn', 
    isSignUp: state => state.authMode === 'signUp',
    shoppingCart: state => state.shoppingCart,
    shoppingCartSize: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + b.counter, 0) : 0,
    shoppingCartSubTotal: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + (b.counter * b.price), 0) : 0,
    shoppingCartTotal: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + (b.counter * b.price), 0) - state.discount : 0,
    userFirstName: state => state.user ? state.user.first_name : ''
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
    storeToken({commit}, loginObj) {
        commit('changeAccessToken', loginObj.access_token)
        commit('updateUser', loginObj.user)
    },
    removeToken({commit}) {
        sessionStorage.removeItem('apollo-token')
        commit('changeAccessToken', null)
        commit('updateUser', null)
    },
    addProduct({commit, state}, {id, name, image, tipoProducto: { price }, type = 'video'}) {
        const sc = [...state.shoppingCart]
        const prodIdx = sc.findIndex(product => product.id === id && product.type === type)
        
        if(prodIdx !== -1) {
            const prod = {...state.shoppingCart[prodIdx]}
            sc.splice(prodIdx, 1, {...prod, counter: ++prod.counter})
        } else {
            sc.push({id, name, image, price, type, counter: 1})
        }

        commit('updateCart', sc)
    },
    removeProduct({commit, state}, {id, type}) {
        const filterByTypeNotMatch = state.shoppingCart.filter(p => p.type !== type )
        const filterByTypeMatch = state.shoppingCart.filter(p => p.type === type ).filter(p => p.id !== id)

        commit('updateCart', [...filterByTypeMatch, ...filterByTypeNotMatch])
    },
    incrementCounter({commit, getters}, {id, type, counter}) {
        const sc = [...getters.shoppingCart]
        const prodIdx = sc.findIndex(product => product.id === id && product.type === type)
        sc.splice(prodIdx, 1, {...{...sc[prodIdx]}, counter: counter})
        commit('updateCart', sc)
    },
}