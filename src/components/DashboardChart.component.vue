<template>
  <b-row class="custom-bg mt-5">
    <LoaderComponent v-if="isLoading" />
    <apexchart
      v-if="!isLoading"
      type="candlestick"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </b-row>
</template>
<script>
import LoaderComponent from "./Loader. component";
export default {
  components: {
    LoaderComponent,
  },
  props: {
    series: Array,
    chartOptions: Object,
    isLoading: Boolean,
  },
};
</script>
