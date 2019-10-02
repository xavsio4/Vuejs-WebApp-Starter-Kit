<template>
  <section>
    <h2>Table Bootstrap</h2>
    <div class="container">
      <vue-bootstrap4-table
        :rows="rows"
        :columns="columns"
        :actions="actions"
        :config="config"
        @on-download="onDownload"
        :classes="classes"
        small
      stacked="md"
      >
        <template slot="action" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
        <template slot="sort-asc-icon">
          <i class="fa fa-sort-up"></i>
        </template>
        <template slot="sort-desc-icon">
          <i class="fa fa-sort-down"></i>
        </template>
        <template slot="no-sort-icon">
          <i class="fa fa-sort"></i>
        </template>
        <template slot="simple-filter-clear-icon">
          <i class="fa fa-times-circle"></i>
        </template>
      </vue-bootstrap4-table>
    </div>
  </section>
</template>
<script>
import JournalService from "./../services/JournalService";
import VueBootstrap4Table from "vue-bootstrap4-table";

export default {
  components: {
    VueBootstrap4Table
  },
  data() {
    return {
      rows: [],
      jList: [],
      columns: [
        {
          label: "id",
          name: "id",
          filter: {
            type: "simple",
            placeholder: "id"
          },
          sort: true,
          uniqueId: true
        },
        {
          label: "title",
          name: "title",
          filter: {
            type: "simple",
            placeholder: "search",
            case_sensitive: false
          },
          sort: true
        },
        {
          label: "content",
          name: "content",
          filter: {
            type: "simple",
            placeholder: "search"
          },
          sort: true,
          row_text_alignment: "text-left",
          column_text_alignment: "text-left"
        },
        {name: 'action',label: 'actions'},
      ],
      //global action buttons
      actions: [
        {
          btn_text: "Download",
          event_name: "on-download",
          event_payload: {
            msg: "my custom message"
          }
        },
        {
          btn_text: "excell",
          event_name: "on-download",
          event_payload: {
            msg: "my custom message"
          }
        }
      ],
      config: {
        pagination: true,
        pagination_info: true,
        num_of_visibile_pagination_buttons: 7,
        per_page: 6,
        checkbox_rows: true,
        highlight_row_hover: true,
        rows_selectable: true,
        multi_column_sort: false,
        // highlight_row_hover_color:"grey",
        card_title: "Vue Bootsrap 4 advanced table",
        card_mode: false,
        selected_rows_info: true,
        per_page_options: [5, 10, 20, 30],
        loaderText: "Updating..."
      },
      classes: {
        table: "table-bordered table-striped"
      }
    };
  },
  methods: {
    onDownload(payload) {
      alert(payload.msg);
    },
    async getJournalList() {
      const response = await JournalService.getJournalList();
      this.jList = response.data;
      this.rows = this.jList;
    }
  },

  mounted() {
    this.getJournalList();
  }
};
</script>
<style scoped>
</style>