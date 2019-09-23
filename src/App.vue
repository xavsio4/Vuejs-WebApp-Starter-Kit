<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <div class="">
      <vue-page-transition name="fade-in-right">
        <router-view />
      </vue-page-transition>
    </div>
    <footer class="section">
      <div class="container">
        <p class="text-muted text-sm">Locale used {{ $i18n.locale }}</p>&copy; MyApp
      </div>
    </footer>
  </div>
  <!-- //App -->
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: "app",
  components: {
    NavigationBar
  },
  mounted() {
    //any code here
  }
};
</script>

<style>
#app {
}
</style>
