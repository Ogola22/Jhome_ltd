<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/Home-master/HeaderComponent.vue'
import FooterComponent from './components/Home-master/FooterComponent.vue'
import AdminHeaderComponent from './components/Admin-master/AdminHeaderComponent.vue'
import AdminFooterComponent from './components/Admin-master/AdminFooterComponent.vue'




export default {
  components: { HeaderComponent, FooterComponent, AdminHeaderComponent, AdminFooterComponent },
}
</script>

<template>
  <header-component></header-component>
    <RouterView />
  <footer-component></footer-component> 

  <!-- <admin-header-component></admin-header-component>
    <RouterView />
  <admin-footer-component></admin-footer-component> -->

</template>


<style>
</style>
