<template>
  <span @click="$emit('search-by', tagContent)">
    {{ tagContent }}
  </span>
</template>

<script>
console.log(process.env.VUE_APP_API_URL);
export default {
  name: "Tag",
  props: {
    tagContent: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
span:first-child {
  margin-left: 0;
}
span {
  margin-left: 5px;
  border-radius: 0.8rem;
  background-color: #dcdcdc;
  font-size: 13px;
  padding: 1px 9px;
  cursor: pointer;

  &:hover {
    background-color: darken(#dcdcdc, 10%);
  }
}
</style>
