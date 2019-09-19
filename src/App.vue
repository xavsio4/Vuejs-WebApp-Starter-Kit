<template>
  <div id="app">
    <navigation-bar></navigation-bar>
   <img alt="Vue logo" src="./assets/logo.png">
    locale used {{ $i18n.locale }}
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'

export default {
  name: 'app',
  components: {
    NavigationBar,
  }
}
</script>

<style>
#app {
  
}
</style>
