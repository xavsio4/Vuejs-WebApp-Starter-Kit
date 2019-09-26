<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <div class="">
      <vue-page-transition name="fade-in-right">
        <router-view />
      </vue-page-transition>
    </div>
    <footer-element></footer-element>
  </div>
  <!-- //App -->
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import FooterElement from "./components/FooterOneElement";

export default {
  name: "app",
  components: {
    NavigationBar,
    FooterElement
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
