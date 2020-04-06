import country from '../graphql/queries/Country.gql'

export const state = () => ({
    access_token: null,
    authMode: 'signIn',
    campusId: 1, //México
    campusCode: 'CDMX',
    currency: 'MXN',
    discount: 0,
    resetPwdSuccess: false,
    shoppingCart: [],
    signUpSuccess: false,
    user: null,
    userVerified: true,
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
    },
    changeUserVerified (state, payload) {
        state.userVerified = payload
    },
    changeSignUpSuccess (state, payload) {
        state.signUpSuccess = payload
    },
    changeResetPwdSuccess (state, payload) {
        state.resetPwdSuccess = payload
    }
}

export const getters = {
    access_token: state => state.access_token,
    campusId: state => state.campusId,
    discount: state => state.discount,
    isSignIn: state => state.authMode === 'signIn', 
    isSignUp: state => state.authMode === 'signUp',
    resetPwdSuccess: state => state.resetPwdSuccess,
    shoppingCart: state => state.shoppingCart,
    shoppingCartSize: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + b.counter, 0) : 0,
    shoppingCartSubTotal: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + (b.counter * b.price), 0) : 0,
    shoppingCartTotal: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + (b.counter * b.price), 0) - state.discount : 0,
    signUpSuccess: state => state.signUpSuccess,
    userFirstName: state => state.user ? state.user.first_name : '',
    userVerified: state => state.userVerified,
}

export const actions = {
    registerUser({commit}, { mutation, variables }) {
        const apollo_client = this.app.apolloProvider.defaultClient

        apollo_client.mutate({ mutation, variables })
            .then( ({ data: { res: { tokens: { access_token } } } })  => {
                return access_token
            })
            .then( async (token) => {
                const _ax = Object.assign({}, this.$axios)
                _ax.setHeader('Accept', 'application/json')
                _ax.setToken( token , 'Bearer')

                const { data: { message }} = await _ax.get(`${process.env.api_url}/api/email/resend`)

                if( message.toLowerCase().indexOf('sent') >= 0 ) {
                    commit('changeSignUpSuccess', true)
                }
            })
            .catch( error => {
                console.error(error)
            })
    },
    login ({commit, dispatch}, { mutation, variables }) {
        const apollo_client = this.app.apolloProvider.defaultClient

        apollo_client.mutate({ mutation, variables })
            .then( ({ data: { res: { access_token, user } } })  => {
                if( access_token && user.email_verified_at ) {
                    dispatch('storeToken', { access_token, user })
                } else {
                    commit('changeUserVerified', false)
                }
            })
    },
    sendResetPassword({commit}, {mutation, variables}){
        const apollo_client = this.app.apolloProvider.defaultClient

        apollo_client.mutate({ mutation, variables })
            .then( ({ data: { res: { status, message } } })  => {
                if( status === 'EMAIL_SENT') {
                    commit('changeResetPwdSuccess', true)
                }
            })
            .catch(error => {
                console.log(error)
            })
    },
    async queryCampus({commit, getters}){
        const apollo_client = this.app.apolloProvider.defaultClient
        const res = await apollo_client.query({
            query: country,
            variables: {
                id: getters.campusId
            }
        })

        if( res.data.country ){
            commit('changeCampus', {id: +res.data.country.id, code: res.data.country.code} )
        }
    },
    storeToken({commit}, { access_token, user }) {
        commit('changeAccessToken', access_token)
        commit('updateUser', user)
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