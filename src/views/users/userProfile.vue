<template>
    <!-- content -->
    <section id="content" class="container pabIndent">
        <!-- userProfile -->
        <div class="userProfile">
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-lg-3">
                    <!-- profileSidebar -->
                    <aside class="profileSidebar">
                        <header class="head">
                            <div class="imgProfile">
                                <img src="../../../src/assets/img/team-5.jpg" alt="" width="74" height="74">
                            </div>
                            <div class="info">
                                <span class="text">{{ user }}</span>
                                <span class="text"><a href="#" class="link">Change Password</a></span>
                            </div>
                        </header>
                        <ul class="navUser list-unstyled">
                            <li>
                                <a href="#">
                                    <i class="far fa-user"></i>
                                    <span>Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fi flaticon-house"></i>
                                    <span>My Properties</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="far fa-heart"></i>
                                    <span>Favorited Properties</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-plus"></i>
                                    <span>Submit Property</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-sign-out-alt"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
                <div class="col-xs-12 col-sm-8 col-lg-9">
                    <!-- accountData -->
                    <div class="accountData">
                        <form>
                            <div class="head">
                                <h4 class="fontNeuron">Account Settings</h4>
                            </div>
                            <div class="accountHolder">
                                <div class="imgProfile">
                                    <div class="imgThumbnail">
                                        <img src="../../../src/assets/img/team-5.jpg" alt="" width="200" height="200">
                                        <div class="btnArea">
                                            <a href="#" class="btn btn-info"><i class="fa fa-upload"></i> Upload Photo</a>
                                        </div>
                                    </div>
                                    <span class="text text-center">*minimum 200px x 200px</span>
                                </div>
                                <div class="accountContent">
                                    <div class="form-group">
                                        <label for="itemN-1">Full Name</label>
                                        <input type="text" class="form-control" placeholder="Enter your name" id="itemN-1">
                                    </div>
                                    <div class="form-group">
                                        <label for="itemN-2">Email</label>
                                        <input type="email" class="form-control" placeholder="Enter Email"
                                            id="itemN-2">
                                    </div>
                                    <div class="form-group">
                                        <label for="itemN-3">Phone</label>
                                        <input type="tel" class="form-control" placeholder="Enter Phone number" id="itemN-3">
                                    </div>
                                    <div class="form-group">
                                        <label for="itemN-4">Biography</label>
                                        <textarea id="itemN-4" class="form-control"
                                            placeholder="Write a brief biography about yourself"></textarea>
                                    </div>
                                    <button type="submit" class="btn alighRight btnSecondary buttonL fontNeuron">Update
                                        Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- accountData -->
                    <div class="accountData">
                        <form>
                            <div class="head">
                                <h4 class="fontNeuron">Change Password</h4>
                            </div>
                            <div class="accountHolder">
                                <div class="accountContent">
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <label for="itemN-5">Current Password</label>
                                                <input type="password" class="form-control"
                                                    placeholder="www.facebook.com/PolygonTheme" id="itemN-5">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <label for="itemN-6">New Password</label>
                                                <input type="password" class="form-control" placeholder="PolygonTheme"
                                                    id="itemN-6">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <label for="itemN-7">Confirm New Password</label>
                                                <input type="password" class="form-control" placeholder="PolygonTheme"
                                                    id="itemN-7">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn alighRight btnSecondary buttonL fontNeuron">Change
                                        Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- accountData -->
                    <div class="accountData">
                        <form>
                            <div class="head">
                                <h4 class="fontNeuron">Social Profiles</h4>
                            </div>
                            <div class="accountHolder">
                                <div class="accountContent">
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <label for="itemN-8">Facebook URL</label>
                                                <input type="text" class="form-control"
                                                    placeholder="www.facebook.com/PolygonTheme" id="itemN-8">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <label for="itemN-9">Twitter URL</label>
                                                <input type="text" class="form-control" placeholder="PolygonTheme"
                                                    id="itemN-9">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <label for="itemN-10">Linkedin URL</label>
                                                <input type="text" class="form-control" placeholder="PolygonTheme"
                                                    id="itemN-10">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <div class="form-group">
                                                <label for="itemN-11">Instagram URL</label>
                                                <input type="text" class="form-control" placeholder="PolygonTheme"
                                                    id="itemN-11">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <label for="itemN-12">Google Plus URL</label>
                                                <input type="text" class="form-control" placeholder="PolygonTheme"
                                                    id="itemN-12">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <div class="form-group">
                                                <label for="itemN-13">Skype</label>
                                                <input type="text" class="form-control" placeholder="PolygonTheme"
                                                    id="itemN-13">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn alighRight btnSecondary buttonL fontNeuron">Save
                                        Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>