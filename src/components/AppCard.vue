<template>
  <div class="app-card flex mt-5">
    <div class="left-side">
      <img :src="app.image" />
    </div>
    <div class="right-side">
      <p class="title">{{ app.title }}</p>
      <p class="description">{{ app.description }}</p>
      <div class="hashtags">
        <Tag
          v-for="(tag, index) in app.hagstags"
          :tag-content="tag"
          :key="index"
          @search-by="tag => $emit('search-by', tag)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag";
export default {
  name: "AppCard",
  props: {
    app: {
      type: Object,
      required: true
    }
  },
  components: {
    Tag
  }
};
</script>

<style lang="scss" scoped>
.app-card {
  background-color: white;
  border-radius: 0.8rem;
  padding: 1rem;

  .left-side {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    border-radius: 1rem;

    img {
      border-radius: 10px;
    }
  }

  .right-side {
    margin-left: 15px;

    .title {
      font-weight: 700;
    }

    .description {
      color: #555;
    }
  }
}
</style>
