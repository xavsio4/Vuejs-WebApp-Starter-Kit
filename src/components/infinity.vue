<template>
  <section>
    <div class="container">
      <h2>Infinity</h2>
      {{ selectedSearch }}
      <vue-bootstrap-typeahead
            :data="searchResult"
            v-model="searchinput"
            size="lg"
            :serializer="s => s.content"
            placeholder="Type search..."
            prepend="Journal:"
            @hit="searchHit($event)"
        />
        <hr/>
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
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';


export default {
  components: {
    InfiniteList,
    ListItem,
    VueBootstrapTypeahead,
  },
  data() {
    return {
      searchinput: '',  
      listItem: ListItem,
      loadSpinner: LoadSpinner,
      items: [],
      containerHeight: 600,
      itemHeight: 100,
      loading: false,
      selectedSearch: null,
      searchResult: []
    };
  },
  created() {
    this.load();
    this.$on("infinite-load", () => {
      this.load();
    });
  },
  watch: {
    searchinput(s) { this.getSearchJournalcontent(s) } //watch the typehead input
  },
  methods: {
    async getJournalList() {
      const response = await JournalService.getJournalList();
      this.items = response.data;
    },
    async getSearchJournalcontent(s) {
      const response = await JournalService.getSearchJournalcontent(s);
      this.searchResult = response.data
    },
    searchHit($evt)
    {
        this.selectedSearch = $evt.content
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