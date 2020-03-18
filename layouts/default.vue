<template>
  <div id="mainFrame">
    <Menu />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Menu from '~/components/menus/Menu.vue'
import Footer from '~/components/footer/Footer.vue'

export default {
  components: {Footer, Menu},
  mounted() {
    const sc = sessionStorage.getItem('shopping-cart')
    const at = sessionStorage.getItem('apollo-token')

    if( sc ) {
      this.$store.commit('updateCart', JSON.parse(sc))
    }

    if( at ) {
      this.$store.commit('changeAccessToken', at)
    }
  }
}
</script>
<style>
@import 'sweetalert2/dist/sweetalert2.min.css';

html {
  font-family:   -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
/**************************************************/
#mainFrame{
  margin-top: 10px;
}

.alignItemsAtBottom{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.alignItemsAtCenter{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.alignItemsToLeft{
  align-items: flex-start;
}

.alignItemsToRight{
  align-items: flex-end;
}

.baseLineItems{
  align-items: baseline;
}

.centerContentColum{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.centerContentRow{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
}
.contentAtTheEnd{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.rowContentAtLeftBottom{
  align-items: flex-end;
  display: flex;
  flex-direction: row;
}
.colContentAtLeftBottom{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.fx-jcc-aic {
  display: flex;
  justify-content: center;
  align-items: center;
}
.txtRed{
  color: #dc3545;
}
.txtWhite{
  color: #fff;
}
.txtJustify{
  text-align: justify;
}
.txtCenter{
  text-align: center;
}
.txtBold{
  font-weight: bold;
}
.margin-top-100{
  margin-top: 100px !important;
}
.margin-top-50{
  margin-top: 50px;
}
.margin-top-20{
  margin-top: 20px;
}
.margin-bottom-100{
  margin-bottom: 100px !important;
}
.padding-top-100{
  padding-top: 100px;
}
.padding-bottom-100{
  padding-bottom: 100px;
}
.margin-bottom-50{
  margin-bottom: 50px;
}
.btn-rojo, .btn-rojo:hover, .btn-membresias, .btn-membresias:hover{
  background-color: #dc3545;
  border-radius: 5px;
  color: #fff;
  padding: .7em;
  text-decoration: none;
}
.btn-membresias{
  margin-top: 30px;
  display: inline-block;
}

.red_list{
  align-content: center;
  background-color: #D63D37;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -60px !important;
  padding: 150px 0  60px;
}
.auth-button-container
{
  align-items: center;
  display: flex;
  width: 100%;
  padding-left: 1.6em;
}
.sign-in {
  flex-direction: column;
  justify-content: space-between;
}
.sign-up {
  justify-content: center;
}
.auth-button-container button {
  margin-bottom: 10px;
  width: fit-content;
}
.flexForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.flexForm > span {
  flex: 0 45%;
}
.suSuccess {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.suSuccess h1{
  text-align: center;
}
.suSuccess p {
  margin: 15px 50px !important;
}
.suSuccess p:first-of-type {
  margin-top: 20px !important;
}
.suSuccess p span {
  color: #dc3545;
  text-decoration: underline;
}
</style>
