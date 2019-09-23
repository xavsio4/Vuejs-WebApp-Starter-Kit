<template>
  <section>
    <div class="container">
      <h2>Table list</h2>
      <div class="col-md-12 controls-bar"></div>

      <vuetable
        ref="vuetable"
        :data="data"
        :fields="fields"
        :api-mode="false"
        :per-page="perPage"
        pagination-path="pagination"
        @vuetable:pagination-data="onPaginationData"
      >
        <div slot="actions" slot-scope="props">
          <button
            class="btn btn-primary btn-sm"
            @click="onActionClicked('view-item', props.rowData)"
          >
            <i class="fa fa-pencil"></i>Edit
          </button>
          <button
            class="btn btn-primary btn-sm"
            @click="onActionClicked('edit-item', props.rowData)"
          >
            <i class="fa fa-eye"></i> view
          </button>
          <button
            class="btn btn-primary btn-sm"
            @click="onActionClicked('delete-item', props.rowData)"
          >
            <i class="fa fa-trash"></i> Delete
          </button>
        </div>
      </vuetable>
      <div style="padding-top:10px">
        <nav aria-label="Table Navigation">
          <ul class="pagination">
            <li :class="{'disabled': isOnFirstPage}" class="page-item">
              <a class="page-link" href="#" @click.prevent="loadPage(1)">
                <span>
                  <i class="fas fa-angle-double-left" />
                </span>
              </a>
            </li>

            <li :class="{'disabled': isOnFirstPage}" class="page-item">
              <a class="page-link" href="#" @click.prevent="loadPage('prev')">
                <span>
                  <i class="fas fa-angle-left" />
                </span>
              </a>
            </li>

            <template v-if="notEnoughPages">
              <li
                v-for="n in totalPage"
                :key="n"
                :class="{'active': isCurrentPage(n)}"
                class="page-item"
              >
                <a class="page-link" @click.prevent="loadPage(n)" v-html="n" />
              </li>
            </template>
            <template v-else>
              <li
                v-for="n in windowSize"
                :key="n"
                :class="{'active': isCurrentPage(windowStart+n-1)}"
                class="page-item"
              >
                <a
                  class="page-link"
                  @click.prevent="loadPage(windowStart+n-1)"
                  v-html="windowStart+n-1"
                />
              </li>
            </template>

            <li :class="{'disabled': isOnLastPage}" class="page-item">
              <a class="page-link" href @click.prevent="loadPage('next')">
                <span>
                  <i class="fas fa-angle-right" />
                </span>
              </a>
            </li>

            <li :class="{'disabled': isOnLastPage}" class="page-item">
              <a class="page-link" href @click.prevent="loadPage(totalPage)">
                <span>
                  <i class="fas fa-angle-double-right" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>
<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import FieldsDef from "./FieldsDef.js";
import axios from "axios";

export default {
  components: {
    Vuetable,
    VuetablePagination,
    axios
  },
  data() {
    return {
      fields: FieldsDef,
      perPage: 3,
      data: []
    };
  },

  watch: {
    data(newVal, oldVal) {
      this.$refs.vuetable.refresh();
    }
  }, // /watch

  mounted() {
    axios.get("https://vuetable.ratiw.net/api/users").then(response => {
      this.data = response.data.data;
    });
  },

  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    onActionClicked(action, data) {
      console.log("slot actions: on-click", data.name);
    }
  }
};
</script>
<style>
</style>