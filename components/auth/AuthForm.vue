<template>
  <b-modal :id="mode" title="Inteligencia Objetiva" size="lg" hide-footer class="centerContentColum">
    <SignIn v-if="isSignIn" @onClose="closeModal"/>
    <SignUp v-if="isSignUp" @onClose="closeModal"/>
  </b-modal>
</template>

<script>
import SignIn from './SignIn'
import SignUp from './SignUp'

export default{
  components: {SignIn, SignUp},
  props: {
    mode: { type: String, default: '' }
  },
  computed: {
    isSignUp() {
      return this.$store.getters.isSignUp
    },
    isSignIn() {
      return this.$store.getters.isSignIn
    },
  },
  methods: {
    closeModal() {
      this.$bvModal.hide(this.mode)
    },
    restorePwd() {
      console.log('Restore Password');
    },
  }
}
</script>
