<template>
    <section id="content" class="container pabIndent">
        <!-- userProfile -->
        <div class="userProfile">
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-lg-3">
                    <!-- profileSidebar -->
                    <aside class="profileSidebar">
                        <header class="head">
                            <div class="imgProfile">
                                <img src="https://via.placeholder.com/74x74" alt="" width="74" height="74">
                            </div>
                            <div class="info">
                                <span class="text">Brian</span>
                            </div>
                        </header>
                        <ul class="navUser list-unstyled">
                            <li>
                                <router-link to="/profile">
                                    <i class="far fa-user"></i>
                                    <span>Account Settings</span>
                                </router-link>
                            </li>
                        </ul>
                    </aside>
                </div>
                <div class="col-xs-12 col-sm-8 col-lg-9">
                    <!-- accountData -->
                    <div class="accountData">
                        <div class="head">
                            <h4 class="fontNeuron">My Properties</h4>
                        </div>
                        <!-- propertiesList -->
                        <div class="propertiesList">
                            <article class="propertyRow">
                                <div class="info">
                                    <div class="imgThumbnail">
                                        <a href="properties-single1.html"><img src="https://via.placeholder.com/110x85"
                                                alt=""></a>
                                    </div>
                                    <div class="textBox">
                                        <h4 class="fontNeuron"><a href="properties-single1.html">Elegant studio flat</a>
                                        </h4>
                                        <address><i class="fi flaticon-pin-1"></i>The Village, Jersey City, NJ 07302, USA
                                        </address>
                                        <div class="priceArea">
                                            <span class="price fontNeuron">$ 490,000</span>
                                            <time class="date" datetime="2017-02-27">2/27/2017</time>
                                        </div>
                                    </div>
                                </div>
                                <div class="btnArea">
                                    <span class="status fontNeuron">Published</span>
                                    <ul class="links list-unstyled">
                                        <li><a href="#"><i class="fa fa-eye"></i>View</a></li>
                                        <li><router-link to="/editProperty"><i class="fa fa-edit"></i>Edit</router-link></li>
                                        <li><a href="#" class="delete"><i class="far fa-window-close"></i></a></li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                    <!-- pagination -->
                    <nav role="navigation" class="navigation pagination pagination1 fontNeuron">
                        <div class="nav-links">
                            <a href="#" class="prev page-numbers">Previous</a>
                            <a href="#" class="page-numbers">1</a>
                            <span class="page-numbers current">2</span>
                            <a href="#" class="page-numbers">3</a>
                            <span class="page-numbers dots">…</span>
                            <a href="#" class="page-numbers">22</a>
                            <a href="#" class="next page-numbers">Next</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
</section>
</template>

<script>
export default {

}
</script>

<style></style>