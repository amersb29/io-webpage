import country from '../graphql/queries/Country.gql'

export const state = () => ({
    access_token: null,
    authMode: 'signIn',
    campusId: 1, //México
    campusCode: 'CDMX',
    currency: 'MXN',
    discount: 0,
    loading: false,
    resetPwdSuccess: false,
    shoppingCart: [],
    signInError: undefined,
    signUpSuccess: false,
    user: null,
    userVerified: true,
})

export const mutations = {
    changeAccessToken(state, newToken){
        sessionStorage.setItem('apollo-token', newToken)
        state.access_token = newToken
    },
    changeAuthMode(state, newMode){
        state.authMode = newMode
    },
    changeCampus(state, {id, code, currency}){
        state.campusCode = code
        state.campusId = id
        state.currency = currency
    },
    changeLogin(state, payload) {
        state.loading = payload
    },
    changeResetPwdSuccess (state, payload) {
        state.resetPwdSuccess = payload
    },
    changeSignInError(state, payload) {
        state.signInError = payload
    },
    changeSignUpSuccess (state, payload) {
        state.signUpSuccess = payload
    },
    changeUserVerified (state, payload) {
        state.userVerified = payload
    },
    updateCampusId(state, id){
        state.campusId = id
    },
    updateCart(state, cart) {
        state.shoppingCart = cart.sort((a, b) => {
            return a.type < b.type ? -1 : 1 
        })

        sessionStorage.setItem('shopping-cart', JSON.stringify(state.shoppingCart))

        if(!cart.length) {
            state.discount = 0
        }
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
    isLoading: state => state.loading,
    isSignIn: state => state.authMode === 'signIn', 
    isSignUp: state => state.authMode === 'signUp',
    resetPwdSuccess: state => state.resetPwdSuccess,
    shoppingCart: state => state.shoppingCart,
    shoppingCartSize: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + b.counter, 0) : 0,
    shoppingCartSubTotal: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + (b.counter * b.price), 0) : 0,
    shoppingCartTotal: state => state.shoppingCart.length ? state.shoppingCart.reduce((a,b) => a + (b.counter * b.price), 0) - state.discount : 0,
    signInError: state => state.signInError,
    signUpSuccess: state => state.signUpSuccess,
    userFirstName: state => state.user ? state.user.first_name : '',
    userVerified: state => state.userVerified,
}

export const actions = {
    registerUser({commit}, { mutation, variables }) {
        commit('changeLogin', true)
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

                commit('changeLogin', false)
            })
            .catch( () => {
                commit('changeSignInError', 'Ha ocurrido un error con tu registro.')
                commit('changeLogin', false)
            })
    },
    login ({commit, dispatch}, { mutation, variables }) {
        commit('changeLogin', true)
        const apollo_client = this.app.apolloProvider.defaultClient

        apollo_client.mutate({ mutation, variables })
            .then( ({ data: { res: { access_token, user } } })  => {
                if( access_token && user.email_verified_at ) {
                    dispatch('storeToken', { access_token, user })
                } else {
                    commit('changeUserVerified', false)
                }
                commit('changeSignInError', undefined)
                commit('changeLogin', false)
            })
            .catch( () => {
                commit('changeSignInError', 'El usuario o la contraseña son inválidos.')
                commit('changeLogin', false)
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
    changeCampus({commit}, campusInfo){
        commit( 'changeCampus', campusInfo )
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