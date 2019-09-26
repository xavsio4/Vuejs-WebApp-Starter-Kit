<template>
  <footer>
    <section class="bg-navy">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-5">
            <img src="assets/img/logo-green.png" alt />
            <p class="u-my-40">
              Nam liber tempor cum soluta nobis eleifend they option congue is nihil
              imper per tem por legere is me velit doming vulputate.
              Nam liber tempor cum soluta nobis eleifend they option congue is nihil
              imper per tem por legere is me velit doming vulputate.
            </p>
          </div>

          <div class="col-lg-2 col-md-6 mb-5 ml-auto">
            <h4 class="text-white">Useful Links</h4>
            <div class="u-h-4 u-w-50 bg-green rounded mt-3 u-mb-40"></div>
            <ul class="list-unstyled u-lh-2">
              <li class="mb-3">
                <a href>App Landing</a>
              </li>
              <li class="mb-3">
                <a href>Software Landing</a>
              </li>
              <li class="mb-3">
                <a href>SEO Landing</a>
              </li>
              <li class="mb-3">
                <a href>Startup Landing</a>
              </li>
              <li class="mb-3">
                <a href>Product Landing</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-5 ml-auto">
            <h4 class="text-white">Useful Links</h4>
            <div class="u-h-4 u-w-50 bg-green rounded mt-3 u-mb-40"></div>
            <ul class="list-unstyled u-lh-2">
              <li>Locale used {{ $i18n.locale }}</li>
              <li class="mb-3">
                <a href>About Us</a>
              </li>
              <li class="mb-3">
                <a href>Testimonials</a>
              </li>
              <li class="mb-3">
                <a href>Pricing</a>
              </li>
              <li class="mb-3">
                <a href>Contact Us</a>
              </li>
              <li class="mb-3">
                <a href>News</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-5 ml-auto">
            <h4 class="text-white">Contact Info</h4>
            <div class="u-h-4 u-w-50 bg-green rounded mt-3 u-mb-40"></div>
            <ul class="list-unstyled">
              <li class="mb-3">
                <span class="icon icon-Phone2 text-green mr-2"></span> 008. 567. 890. 634
              </li>
              <li class="mb-3">
                <span class="icon icon-Mail text-green mr-2"></span>
                <a href="mailto:support@echotheme.com">support@echotheme.com</a>
              </li>
              <li class="mb-3">
                <span class="icon icon-Pointer text-green mr-2"></span> Melbourne, Australia
              </li>
            </ul>
            <ul class="list-inline social social-rounded mt-4">
              <li class="list-inline-item">
                <a href>
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href>
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href>
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href>
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- END row-->
      </div>
      <!-- END container-->
    </section>
    <section class="u-py-40 bg-navy-dark">
      <div class="container">
        <p class="mb-0 text-center">
          © Copyright {{ new Date().getFullYear() }} 
          <a
            class="text-green"
            href=""
            target="_blank"
          ></a>
        </p>
      </div>
    </section>
  </footer>
</template>
<script>
export default {};
</script>