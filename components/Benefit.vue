<template>
  <div>
    <div class="red_list_item">

        <div class="emblem">
          <font-awesome-icon :icon="`${icon}`" />
        </div> 

        <h5>{{text}}</h5>
        <p>{{description}}</p>
    </div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {FontAwesomeIcon},
  props: ['text', 'description', 'icon']
}
</script>

<style>
.red_list_item{
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 70px;
  max-width: 356px;
}
.red_list_item h5, .red_list_item p{
  text-align: center;
}
.red_list_item h5{
  margin: 30px 0 20px;
  text-decoration: underline;
  line-height: 1.5em;
}
.red_list_item p{
  font-size: .8em;
}
.emblem{
  align-items: center;
  background-color: #D63D37;
  border-radius: 50%;
  border: 3px solid white;
  display: flex;
  font-size: 1.5em;
  height: 70px;
  justify-content: center;
  text-align: center;
  width: 70px;
}
</style>
