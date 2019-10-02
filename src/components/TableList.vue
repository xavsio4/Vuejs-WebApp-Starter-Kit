<template>
  <section>
    <div class="loader">LOADING</div>
    <div class="container">
      <h1>Table List</h1>
      <div class="mt-3">
        <b-button-group size="sm">
          <b-button @click="$modal.show('add-item-modal')" variant="primary">Add an Item</b-button>
        </b-button-group>
      </div>
      <vuetable-pagination-info
        ref="paginationInfo"
        :info-template="'Affichage de {from} à {to} sur {total} utilisteurs'"
        :css="paginationInfoCss"
      ></vuetable-pagination-info>
      
      <vuetable
        ref="vuetable"
        :fields="fields"
        rowClass="vuetable-detail-row"
        :api-mode="false"
        detail-row-component="detail-row"
        :per-page="perPage"
        detail-row-transition="slide-fade"
        :multi-sort="true"
        multi-sort-key="ctrl"
        :sort-order="sortOrder"
        :data-manager="dataManager"
        pagination-path="pagination"
        @vuetable:pagination-data="onPaginationData"
        wrapper-class="vuetable-wrapper"
      >
        <div slot="actions" slot-scope="props">
          <button class="btn btn-sm" @click="showDetailRow(props.rowData)">
            <i class="fa fa-eye"></i>
          </button>
          <button class="btn btn-sm" @click="onActionClicked('edit-item', props.rowData)">
            <i class="fa fa-pencil"></i>
          </button>
          <button class="btn btn-sm" @click="onActionDelete('delete-item', props.rowData, props.rowIndex)">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </vuetable>
      <div style="padding-top:10px">
        <vuetable-pagination
          ref="pagination"
          @vuetable-pagination:change-page="onChangePage"
          :css="paginationCss"
        ></vuetable-pagination>
      </div>
    </div>
    <!-- Modal example 1 -->
    <modal
      name="hello-world"
      transition="pop-out"
      @before-open="beforeOpen"
      :scrollable="true"
      height="100%"
    >
      Finally
      {{ title }}
    </modal>
    <!-- special integration of external modal definition -->
    <add-item-modal/>
    <!-- dialog modal -->
    <v-dialog transition="bounce" :scrollable="true" height="auto" />
  </section>
</template>

<script>
// import the services file that holds the API calls and that includes axios
import JournalService from "./../services/JournalService";

import Vuetable from "vuetable-2";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";
import FieldsDef from "./FieldsDef.js";
import DetailRow from './DetailRow';
import moment from "vue-moment";
import _ from "lodash";

import { mapGetters, mapActions } from 'vuex'

/**
 * Import specific modals for edition
 */
import AddItemModal from "./modals/AddItemModal";

export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    AddItemModal,
    DetailRow,
  },
  data() {
    return {
      fields: FieldsDef,
      perPage: 3,
      sortOrder: [
        {
          field: "id",
          sortField: "id",
          direction: "asc"
        }
      ],
      jList: [],
      
      paginationInfoCss: {
        infoClass: "pull-right text-muted"
      },
      paginationCss: {
        wrapperClass: "pagination",
        activeClass: "active",
        pageClass: "page-link page-item",
        linkClass: "page-link",
        paginationClass: "pagination",
        paginationInfoClass: "left floated left aligned six wide column",
        dropdownClass: "fa fa-caret-down",
        ascendingIcon: "glyphicon glyphicon-chevron-up",
        descendingIcon: "glyphicon glyphicon-chevron-down",
        icons: {
          first: "fa fa-angle-double-left",
          prev: "fa fa-angle-left",
          next: "fa fa-angle-right",
          last: "fa fa-angle-double-right"
        }
      }
    };
  },

  watch: {
    jList(newVal, oldVal) {
      this.$refs.vuetable.refresh();
    }
  },

  mounted() {
    this.getJournalList();
  },

  methods: {
    async getJournalList() {
      const response = await JournalService.getJournalList();
      this.jList = response.data;
    },

    beforeOpen(event) {
      console.log(event.params.foo);
    },

    formatDate(value, fmt = "D MMM YYYY") {
      return value == null ? "" : moment(value, "YYYY-MM-DD").format(fmt);
    },

    mshow() {
      this.$modal.show("hello-world");
    },

    mhide() {
      this.$modal.hide("hello-world");
    },

    showDetailRow(value) {
                var icon = this.$refs.vuetable.isVisibleDetailRow(value) ? 'down' : 'right'
                return [
                    '<a class="show-detail-row">',
                        '<i class="chevron circle ' + icon + ' icon"></i>',
                    '</a>'
                ].join('')
            },
            setFilter: function() {
                this.moreParams = [
                    'filter=' + this.searchFor
                ]
                this.$nextTick(function() {
                    this.$broadcast('vuetable:refresh')
                })
            },
            resetFilter: function() {
                this.searchFor = ''
                this.setFilter()
            },

    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },

    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },

    dataManager(sortOrder, pagination) {
      if (this.jList.length < 1) return;

      let local = this.jList;

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
        local = _.orderBy(
          local,
          sortOrder[0].sortField,
          sortOrder[0].direction
        );
      }

      pagination = this.$refs.vuetable.makePagination(
        local.length,
        this.perPage
      );
      console.log("pagination:", pagination);
      let from = pagination.from - 1;
      let to = from + this.perPage;

      return {
        pagination: pagination,
        data: _.slice(local, from, to)
      };
    },

    /* CRUD actions */

    onActionDelete(action, data, rowIndex) {
      //console.log("slot actions: on-click", data.name, action);
      this.$modal.show("dialog", {
        title: "Do you really want to delete this entry ?"+rowIndex,
        text: data.id,
        buttons: [
          {
            title: "Cancel",
            handler: () => {
              this.$modal.hide("dialog");
              //console.log(data);
            }
          },
          {
            title: "Delete",
            default: true,
            handler: () => {
             // JournalService.deleteJournalEntry(data.id);
              this.jList.splice(rowIndex, 1);
              this.$modal.hide("dialog");

            }
          },
        ]
      });
    } // /actionDelate
  }
};
</script>

<style scoped>

.loader {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s linear;
    background: url('loader.gif') no-repeat bottom center;
    width: 200px;
    height: 30px;
    font-size: 1em;
    text-align: center;
    margin-left: -100px;
    letter-spacing: 4px;
    color: #3E97F6;
    position: absolute;
    top: 160px;
    left: 50%;
}
.loading .loader {
    visibility: visible;
    opacity: 1;
    z-index: 100;
}
.loading .vuetable{
    opacity:0.3;
    filter: alpha(opacity=30); /* IE8 and earlier */
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
tr.vuetable-detail-row {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to, .slide-fade-move  
{
  transform: translateX(10px);
  opacity: 0;
}

</style>
