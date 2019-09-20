<template>
  <div class="home">
   
    <h1>{{ msg }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <img alt="Vue logo" src="./../assets/img/logo.png">
    locale used {{ $i18n.locale }}
  
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
