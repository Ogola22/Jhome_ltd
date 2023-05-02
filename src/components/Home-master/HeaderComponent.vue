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
              src="../../assets/img/icon-deal.png"
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
            <router-link to="/services" class="nav-item nav-link">Services</router-link>
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
                <a href="property-list.html" class="dropdown-item"
                  >Property List</a
                >
                <a href="property-type.html" class="dropdown-item"
                  >Property Type</a
                >
                <a href="property-agent.html" class="dropdown-item"
                  >Property Agent</a
                >
              </div>
            </div>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu rounded-0 m-0">
                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                <a href="404.html" class="dropdown-item">404 Error</a>
              </div>
            </div>
            <router-link to="/contact" class="nav-item nav-link"
              >Contact</router-link
            >
            <router-link to="/login" class="nav-item nav-link">Login </router-link>
          </div>
          
        </div>
      </nav>
    </div>
    <!-- Navbar End -->

    <!-- Header Start -->
    <div class="container-fluid header bg-white p-0">
      <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div class="col-md-6 p-5 mt-lg-5">
          <h1 class="display-5 animated fadeIn mb-4">
            Find A <span class="text-primary">Perfect Home</span> To Live With
            Your Family
          </h1>
          <p class="animated fadeIn mb-4 pb-2">
            Welcome to Jhome Realty, where finding your dream home is our top
            priority.
          </p>
          <router-link to="/register" class="btn btn-primary py-3 px-5 me-3 animated fadeIn"
            >Join us
          </router-link>
          
        </div>
        <div class="col-md-6 animated fadeIn">
          <img class="img-fluid" src="../../assets/img/carousel-1.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- Header End -->

    <!-- Search Start -->
    <div
      class="container-fluid bg-primary mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style="padding: 35px"
    >
      <div class="container">
        <div class="row g-2">
          <div class="col-md-10">
            <div class="row g-2">
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control border-0 py-3"
                  placeholder="Search Keyword"
                />
              </div>
              <div class="col-md-4">
                <select class="form-select border-0 py-3">
                  <option selected>Property Type</option>
                  <option value="1">Property Type 1</option>
                  <option value="2">Property Type 2</option>
                  <option value="3">Property Type 3</option>
                </select>
              </div>
              <div class="col-md-4">
                <select class="form-select border-0 py-3">
                  <option selected>Location</option>
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <button class="btn btn-dark border-0 w-100 py-3">Search</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Search End -->
  </div>
</template>

<script>
export default {};
</script>
<style></style>
