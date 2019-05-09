<template>
  <div id="mainFrame">
    <Menu />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {Footer, Menu}
}
</script>
<style>
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
.btn-rojo, .btn-rojo:hover, .btn-membresias, btn-membresias:hover{
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
</style>
