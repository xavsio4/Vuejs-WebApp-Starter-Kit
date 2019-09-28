<template>
<section>
    <div class="container">

</div>

</section>

</template>
<script>
import JournalService from "./../services/JournalService";

export default {
  components: {
   
  },
  data() {
    return {
      jList: [],
    };
  },

  
  mounted() {
    this.getJournalList();
  },

  methods: {
    async getJournalList() {
      const response = await JournalService.getJournalList();
      this.jList = response.data;
    },

    

    
  }
};
</script>
<style scoped>

</style>