<template>
<transition name="slide-fade">
  <div @click="onClick">
      <div class="inline field">
        <label>idd:</label>
        <span>{{rowData.id}}</span>
      </div>
      <div class="inline field">
        <label>Title:</label>
        <span>{{rowData.title}}</span>
      </div>
      <div class="inline field">
        <label>Content:</label>
        <span>{{rowData.content}}</span>
      </div>
  </div>
  </transition>
</template>

<script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {
    onClick(event) {
      console.log("detail-row: on-click", event.target);
    }
  }
};
</script>
<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
