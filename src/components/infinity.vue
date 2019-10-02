<template>
  <section>
    <div class="container">
      <h2>Infinity</h2>
      <infinite-list
        @load="load"
        :list-item="listItem"
        :spinner="loadSpinner"
        :container-height="containerHeight"
        :item-height="itemHeight"
        :items="items"
        :loading="loading"
      ></infinite-list>
    </div>
  </section>
</template>
<script>
import ListItem from "./ListItem";
import LoadSpinner from "./LoadSpinner";
import InfiniteList from "vue-infinite-list";
import JournalService from "./../services/JournalService";

export default {
  components: {
    InfiniteList,
    ListItem
  },
  data() {
    return {
      listItem: ListItem,
      loadSpinner: LoadSpinner,
      items: [],
      containerHeight: 600,
      itemHeight: 100,
      loading: false
    };
  },
  created() {
    this.load();
    this.$on("infinite-load", () => {
      this.load();
    });
  },
  methods: {
    async getJournalList() {
      const response = await JournalService.getJournalList();
      this.items = response.data;
    },
    load() {
      const me = this;
      this.loading = true;
      setTimeout(function() {
        me.getJournalList();
        me.loading = false;
      }, 200);
    }
  }
};
</script>
<style scoped>
</style>