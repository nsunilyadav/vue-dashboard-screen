<template>
  <b-row class="custom-bg">
    <b-col cols="12">
      <b-table striped hover :items="items" :fields="fields" :busy="isLoading">
        <template #table-busy>
          <LoaderComponent />
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>
<script>
import LoaderComponent from "./Loader. component";

export default {
  components: {
    LoaderComponent,
  },
  props: {
    isLoading: Boolean,
    busy: Boolean,
    items: Array,
    fields: Array,
  },
};
</script>
<style></style>
