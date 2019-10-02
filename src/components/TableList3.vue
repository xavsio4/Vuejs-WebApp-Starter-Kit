<template>
  <section>
    
    <div class="container">
      <h2>Table Bootstrap 3</h2>

      <b-row>
    <b-col cols="12">
      <h2>
        Board List
        <b-link href="#/add-board">(Add Board)</b-link>
      </h2>

      <b-table 
      sticky-header
      primary-key="id"
      striped hover 
      :items="jList"
      :tbody-transition-props="transProps" 
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      show-empty
      small
      stacked="md">
      
      <template v-slot:cell(delete)="row">
                <b-button size="sm" variant="danger">delete</b-button>
            </template>
      </b-table>
    </b-col>
 </b-row>
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
      transProps: {
          name: 'flip-list',
        },
      fields: [
        // { key: 'action', label: 'Actions' },
        { key: 'delete', label: 'delete',sortable: false, },
        'id',
          {
            key: 'title',
            label: 'Title',
            sortable: true,
            'class': 'text-left'
          },
          {
            key: 'content',
            label: 'Content',
            sortable: true,
            'class': 'text-left'
          },
         
        ],
      
      jList: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
    };
  },
  methods: {
    info(item, index, target) {
      // do something
    },
    async getJournalList() {
      const response = await JournalService.getJournalList();
      this.jList = response.data;
    }
  },

  mounted() {
    this.getJournalList();
    this.totalRows = this.jList.length
  }
};
</script>
<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>