<script>
import { RouterLink, RouterView } from 'vue-router'
// import HeaderComponent from './components/Home-master/HeaderComponent.vue'
import FooterComponent from './components/Home-master/FooterComponent.vue'
import NavbarComponent from './components/Home-master/NavbarComponent.vue';




export default {
  components: { NavbarComponent, FooterComponent},
}
</script>

<template>
  <navbar-component></navbar-component>
    <RouterView />
  <footer-component></footer-component> 

</template>


<style>
</style>
