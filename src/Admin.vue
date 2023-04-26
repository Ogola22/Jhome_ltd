<script>
import { RouterLink, RouterView } from 'vue-router'
import AdminHeaderComponent from './components/Admin/AdminHeaderComponent.vue'
import AdminFooterComponent from './components/Admin/AdminFooterComponent.vue'


export default {
    components: {AdminHeaderComponent,AdminFooterComponent}
}
</script>
<template>
    <admin-header-component></admin-header-component>
       <RouterView />
    <admin-footer-component></admin-footer-component>
</template>
