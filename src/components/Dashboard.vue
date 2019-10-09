<template>
  <section id="dashboard">
    <div class="container">
      <h2>Dashboard</h2>
      <p>User: {{ user_id }} Token: {{ token }}</p>
      <div class="col-md-4">
        <info-ticket subtext="Number of employees" headtext="876" />
      </div>
      <div class="col-md-4">
        <info-ticket subtext="Total Salary" headtext="122.876,55" />
      </div>
    </div>
  </section>
</template>
<script>
import InfoTicket from "./widgets/InfoTicket";

export default {
  name: "dashboard",
  components: {
    InfoTicket
  },
  data() {
    return {
      user_id: localStorage.getItem('user_id'), 
      token: localStorage.getItem('authorizationToken'),
    };
  },
};
</script>
<style scoped>
</style>