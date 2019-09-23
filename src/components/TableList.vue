<template>
<section>
	<div class="container">
		<h1>Table List</h1>
    <vuetable-pagination-info ref="paginationInfo"
      :info-template="'Affichage de {from} à {to} sur {total} utilisteurs'"
      :css="paginationInfoCss"
    ></vuetable-pagination-info>
		<vuetable ref="vuetable"
			:api-mode="false"
			:fields="fields"
      :per-page="perPage"
      :multi-sort="true"
      multi-sort-key="ctrl"
      :sort-order="sortOrder"
			:data-manager="dataManager"
      pagination-path="pagination"
	    @vuetable:pagination-data="onPaginationData"
		>
			<div slot="actions" slot-scope="props">
				<button 
					class="btn btn-sm" 
					@click="onActionClicked('view-item', props.rowData)"
				>
					<i class="fa fa-eye"></i>
				</button>
				<button 
					class="btn btn-sm" 
					@click="onActionClicked('edit-item', props.rowData)"
				>
					<i class="fa fa-pencil"></i>
				</button>
				<button 
					class="btn btn-sm" 
					@click="onActionClicked('delete-item', props.rowData)"
				>
					<i class="fa fa-trash"></i>
				</button>
			</div>
		</vuetable>
    <div style="padding-top:10px">
      <vuetable-pagination ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
        :css="paginationCss"
      ></vuetable-pagination>
    </div>
    
	</div>
  </section>
</template>

<script>
import Vuetable from "vuetable-2"
import VuetablePagination from "vuetable-2/src/components/VuetablePagination"
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import FieldsDef from "./FieldsDef.js"
import axios from "axios"
import _ from "lodash"

export default {
  name: "app",

  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },

  data() {
    return {
      fields: FieldsDef,
      perPage: 3,
      sortOrder: [
        {
          field: 'email',
          sortField: 'email',
          direction: 'asc'
        }
      ],
      data: [],
      paginationInfoCss: {
        infoClass:"pull-right text-muted"
      },
      paginationCss: {
        wrapperClass: 'pagination',
        activeClass: 'active',
        pageClass: 'page-link page-item',
        linkClass: 'page-link',
        paginationClass: 'pagination',
        paginationInfoClass: 'left floated left aligned six wide column',
        dropdownClass: 'fa fa-caret',
        icons: {
          first: 'fa fa-angle-double-left',
          prev: 'fa fa-angle-left',
          next: 'fa fa-angle-right',
          last: 'fa fa-angle-double-right',
        }
      },
    };
  },

  watch: {
    data(newVal, oldVal) {
      this.$refs.vuetable.refresh();
    }
  },

  mounted() {
    axios.get("https://vuetable.ratiw.net/api/users").then(response => {
      this.data = response.data.data;
    });
  },

  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    dataManager(sortOrder, pagination) {
      if (this.data.length < 1) return;

      let local = this.data;

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
      console.log('pagination:', pagination)
      let from = pagination.from - 1;
      let to = from + this.perPage;

      return {
        pagination: pagination,
        data: _.slice(local, from, to)
      };
    },
    onActionClicked(action, data) {
      console.log("slot actions: on-click", data.name);
    }
  }
};
</script>

<style>

</style>
