<template>
  <div id="app">
      <navigation-bar></navigation-bar>
    <div class="container">  
      <router-view></router-view>
    </div>
  </div><!-- //App -->
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: "app",
  components: {
    NavigationBar
  }
};
</script>

<style>
#app {
  
}
</style>
