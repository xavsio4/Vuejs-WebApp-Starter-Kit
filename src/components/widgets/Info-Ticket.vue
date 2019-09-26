<template>
  <div class="box-shadow-v2 p-5 m-3 rounded">
    <span class="u-fs-36 countdown-days d-block">{{ headtext }}</span>
    <span>{{ subtext }}</span>
  </div>
</template>
<script>
export default {
   props: {
      subtext: String,
      headtext: String, 
    }, 
};
</script>
<style>
</style>