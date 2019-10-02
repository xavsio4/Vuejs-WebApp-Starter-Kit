<template>
  <div class="list-item">
    <div class="index">
      <b-card bg-variant="dark" text-variant="white" :title="data.title">
        <b-card-sub-title class="mb-2">{{data.created_at | formattedTime}}</b-card-sub-title>
        <b-card-text>{{data.content}}</b-card-text>
        <b-button size="sm" href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {};
  },
  filters: {
    formattedTime: function(value) {
      var sec_num = parseInt(value, 10);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      var seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    }
  }
};
</script>

<style>
.list-item {
  box-sizing: border-box;
  ùin-height: 100px;
  line-height: 100px;
  text-align: left;
  padding-bottom: 10px;
  
}
.list-item .index {
  text-align: left;
  margin-bottom: 6px;
  
}
</style>