<template>
  <div class="home">
    

    <section
      class="u-py-100 u-h-100vh u-flex-center"
      data-dark-overlay="6"
      style="background:url(../assets/img/bkg/hero.jpg) no-repeat; background-size: cover; background-position: top center;"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 u-mt-80 text-center">
            <span class="text-center"><img alt="Vue logo" src="./../../assets/img/logo.png" height="100" /></span>
            <h1 class="display-4 u-fw-600 text-white u-mb-40">{{ $t('welcome') }}</h1>
            <p class="u-fs-22 text-white u-lh-1_8 u-mb-40">{{ appName }}</p>
            <a href class="btn btn btn-rounded btn-green px-md-5">{{ msg }}</a>
            <a href class="btn btn btn-rounded btn-white ml-3 px-md-5">Learn more</a>
          </div>
          <!-- END col-lg-6-->
        </div>
        <!-- END row-->
      </div>
      <!-- END container-->
    </section>
    <!-- END intro-hero-->
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      appName: ""
    };
  },
  mounted() {
    this.appName = process.env.VUE_APP_NAME;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
