import VuetableFieldHandle from 'vuetable-2/src/components/VuetableFieldHandle.vue'

export default [
  {
    name: VuetableFieldHandle
  },
  {
    name: 'id',
    title: 'Id',
  },
  {
    name: 'title',
    title: 'Titre',
    sortField: 'title'
  },
  {
    name: 'content',
    title: 'Content',
    titleClass: 'center aligned',
    dataClass: 'center aligned',
  },
  'actions'
]