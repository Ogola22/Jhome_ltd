<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderFooter/HeaderComponent.vue'
import FooterComponent from './components/HeaderFooter/FooterComponent.vue'
import AdminHeaderComponent from './components/Admin/AdminAdminHeaderComponent.vue'
import AdminFooterComponent from './components/Admin/AdminFooterComponent.vue'



export default {
  components: { HeaderComponent, FooterComponent, AdminHeaderComponent,AdminFooterComponent },
}
</script>

<template>
  <header-component></header-component>

  <RouterView />
  
  <footer-component></footer-component>
 
</template>

<style>
</style>
