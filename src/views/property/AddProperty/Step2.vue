<template>
    <!-- content -->
    <section id="content" class="container pEqual">
        <div class="addProperty">
            <h1 class="fontNeuron">Add New Property</h1>
            <ol class="navSteps">
                <li class="completed">
                    <router-link to="/addProperty">
                        <span class="text">Basic Info</span>
                    </router-link>
                </li>
                <li class="active">
                    <router-link to="/step2">
                        <span class="text">Photos &amp; EPC</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/step3">
                        <span class="text">Location</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/step4">
                        <span class="text">Private Notes</span>
                    </router-link>
                </li>
            </ol>
            <div class="formContent">
                <form>
                    <header class="contentHead">
                        <h2 class="fontNeuron">Photos &amp; EPC</h2>
                        <div class="btnArea">
                            <router-link to="/addProperty" class="btn btn-lighter">Back</router-link>
                            <router-link to="/step3" class="btn btn-info">Next</router-link>
                        </div>
                    </header>
                    <div class="galleryUploads">
                        <div class="titleArea">
                            <span class="title">Photo Gallery</span>
                            <p>*At least one image is for valid submission, minimum width of 817px.</p>
                            <p>*You can mark an image as featured by clicking the star icon, Otherwise first image will be
                                considered featured image.</p>
                        </div>
                        <div class="imageGallery">
                            <div class="image imageLoaded">
                                <img src="https://via.placeholder.com/200x150" alt="" width="200" height="150">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <i class="fa fa-cloud-arrow-up me-3"></i>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                            </div>
                            <div class="image imageLoaded">
                                <img src="https://via.placeholder.com/200x150" alt="" width="200" height="150">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"><i class="fi flaticon-edit"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <i class="fa fa-cloud-arrow-up me-3"></i>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                            </div>
                            <div class="image imageLoaded">
                                <img src="https://via.placeholder.com/200x150" alt="" width="200" height="150">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <i class="fa fa-cloud-arrow-up me-3"></i>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                            </div>
                            <div class="image">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"><i class="fi flaticon-edit"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <i class="fa fa-cloud-arrow-up me-3"></i>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="galleryUploads">
                        <div class="titleArea">
                            <span class="title">File Documents</span>
                            <p>*i.e Energy Performance Certificate - EPC. Allowd extensions are txt, pdf, doc, docx</p>
                        </div>
                        <div class="imageGallery">
                            <div class="image fileLoaded">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"><i class="fi flaticon-edit"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <i class="fa fa-cloud-arrow-up me-3"></i>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                                <span class="textFile">
                                    <i class="far fa-file-pdf"></i>
                                    <span class="fileName">Document Name</span>
                                </span>
                            </div>
                            <div class="image fileLoaded">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"><i class="fi flaticon-edit"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <i class="far fa-cloud-computing"></i>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                                <span class="textFile">
                                    <i class="far fa-file-word"></i>
                                    <span class="fileName">Document Name</span>
                                </span>
                            </div>
                            <div class="image fileLoaded">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"><i class="fi flaticon-edit"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <i class="fi flaticon-cloud-computing"></i>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                                <span class="textFile">
                                    <i class="far fa-file-pdf"></i>
                                    <span class="fileName">Document Name</span>
                                </span>
                            </div>
                            <div class="image">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"><i class="fi flaticon-edit"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <span>Upload File</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="galleryUploads">
                        <div class="titleArea">
                            <span class="title">Floor Plans</span>
                        </div>
                        <div class="imageGallery">
                            <div class="image imageLoaded">
                                <img src="https://via.placeholder.com/200x150" alt="" width="200" height="150">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"><i class="fi flaticon-edit"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                            </div>
                            <div class="image">
                                <div class="btnsArea">
                                    <a href="#" class="link close"><i class="fa fa-window-close"></i></a>
                                    <a href="#" class="link"><i class="fi flaticon-edit"></i></a>
                                </div>
                                <a href="#" class="text">
                                    <span>
                                        <i class="fi flaticon-cloud-computing"></i>
                                        <span>Upload Image</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="itemN-26">Property Video</label>
                                <p>*Put URL from video sites like youtube, vimeo etc</p>
                                <input type="text" class="form-control" placeholder="Video URL" id="itemN-26">
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="itemN-27">360° Virtual Tour</label>
                                <textarea class="form-control" placeholder="Embed Iframe code" id="itemN-27"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="btnArea">
                        <router-link to="/addProperty" class="btn btn-lighter">Back</router-link>
                        <router-link to="/step3" class="btn btnDark">Next</router-link>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style></style>