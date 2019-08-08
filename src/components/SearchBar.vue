<template>
  <div class="search-bar mt-5">
    <input
      class="rounded-sm w-full border-solid border border-gray-300"
      v-model.trim="searchTerm"
      @keyup.enter="performSearch"
      @search="performSearch"
      type="search"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  props: {
    searchTag: {
      type: String
    }
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  watch: {
    searchTag() {
      this.searchTerm = this.searchTag;
      this.performSearch();
    }
  },
  methods: {
    performSearch() {
      this.$emit("search", this.searchTerm);
    }
  }
};
</script>

<style scoped>
input[type="search"] {
  padding: 1rem;
  display: block;
  border-radius: 2rem;
  width: 100%;
  box-sizing: border-box;
  border: none;
  font-size: 1rem;
  outline: 0;
}
</style>
