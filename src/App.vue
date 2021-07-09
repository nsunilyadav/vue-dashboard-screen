<template>
  <div id="app">
    <DashboardComponent />
  </div>
</template>

<script>
import DashboardComponent from "./components/Dashboard.component.vue";

export default {
  components: {
    DashboardComponent,
  },
};
</script>

<style>
#app {
  font-family: "Poppins";
  background-color: #e5e5e5;
  height: 100vh;
}
</style>
