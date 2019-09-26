<template>
  <section id="dashboard">
    <div class="container">
      <h2>Dashboard</h2>
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
import InfoTicket from "./widgets/Info-Ticket";

export default {
  name: "dashboard",
  components: {
    InfoTicket
  }
};
</script>
<style scoped>
</style>