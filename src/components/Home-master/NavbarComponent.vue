<template>
    <div class="container-xxl bg-white p-0">
      <!-- Navbar Start -->
      <div class="container-fluid nav-bar bg-transparent">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <routerLink
            to="/"
            class="navbar-brand d-flex align-items-center text-center"
          >
            <div class="icon p-2 me-2">
              <img
                class="img-fluid"
                src="/icon-deal.png"
                alt="Icon"
                style="width: 30px; height: 30px"
              />
            </div>
            <h1 class="m-0 text-primary">Jhomes</h1>
          </routerLink>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
              <router-link to="/" class="nav-item nav-link">Home</router-link>
              <router-link to="/about" class="nav-item nav-link"
                >About</router-link
              >
              <router-link :to="{name: 'services'}" class="nav-item nav-link">Services</router-link>
              <router-link to="/agents" class="nav-item nav-link"
                >Agents</router-link
              >
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  >Property</a
                >
                <div class="dropdown-menu rounded-0 m-0">
                  <router-link to="/propertyList" class="dropdown-item"
                    >Property List</router-link
                  >
                  <a href="property-type.html" class="dropdown-item"
                    >Request Property</a
                  >
                  <a href="property-agent.html" class="dropdown-item"
                    >Property Agent</a
                  >
                </div>
              </div>
              <router-link to="/contact" class="nav-item nav-link"
                >Contact</router-link
              >
              <router-link to="/login" class="nav-item nav-link" v-if="!user">Login </router-link>
              <router-link to="/register" class="nav-item nav-link" v-if="!user">Register</router-link>
              
              <button class="dropdown-item" v-if="user" @click="handleClick"><router-link to="" class="fa fa-sign-out-alt">Logout</router-link></button>

              <div class="nav-item dropdown">
                <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown" ><i class="far fa-user"></i></div>
                
                <div class="dropdown-menu rounded-0 m-0">
                  <li  v-if="user">
                    <router-link :to="'/profile/' + user.id" class="dropdown-item mb-3">Hi, <span>{{ user.name }}</span></router-link>
                    <router-link to="" class="dropdown-item mb-3">Account</router-link>
                  </li>
                 
                  
                </div>
              </div>
            </div>
            
          </div>
        </nav>
      </div>
      <!-- Navbar End -->
    </div>
  </template>
  
  <script>
import axios from 'axios';
export default {
  props: ["user"],
  data() {
    return {
      user: null,
      currentTime: new Date().toLocaleTimeString()
    }
  },
  async created() {
    const response = await axios.get('user');
    this.user = response.data
    
  },
  methods: {
      async handleClick() {
      this.handleLogout();
      this.refreshPage();
    },
    async handleLogout() {
      if (confirm('Are you sure to Logout?')) {
        localStorage.removeItem('token');
      }
    },
    async refreshPage() {
      location.reload();
    },
  },
  
}
  </script>
  <style></style>
  