<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/Home-master/HeaderComponent.vue'
import FooterComponent from './components/Home-master/FooterComponent.vue'




export default {
  components: { HeaderComponent, FooterComponent},
}
</script>

<template>
  <header-component></header-component>
    <RouterView />
  <footer-component></footer-component> 

</template>


<style>
</style>
