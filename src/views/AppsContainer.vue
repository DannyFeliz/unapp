<template>
  <div class="home">
    <SearchBar :search-tag="searchTag" @search="term => (searchTerm = term)" />
    <AppCard v-for="app in filteredApps" :key="app.id" :app="app" @search-by="tag => (searchTag = tag)" />
  </div>
</template>

<script>
import AppCard from "@/components/AppCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "AppContainer",
  components: {
    AppCard,
    SearchBar
  },
  data() {
    return {
      searchTag: "",
      searchTerm: "",
      apps: [
        {
          id: "8a6e1534-ed14-4c3f-a486-5b2785a91917",
          image: "https://picsum.photos/id/10/200/200",
          title: "sit qui ut",
          description: "Dolores dicta est qui blanditiis.",
          hagstags: ["#assumenda", "#voluptatem", "#nesciunt", "#reiciendis"]
        },
        {
          id: "57b3d75a-fb2c-4346-b64f-4a253a04e527",
          image: "https://picsum.photos/id/11/200/200",
          title: "porro doloremque officiis",
          description: "Aut corporis dolores veniam rem consequatur.",
          hagstags: ["#sed", "#eos", "#asperiores", "#et"]
        },
        {
          id: "b005955e-ef3c-4c8c-8cf2-d0c07bb0f60f",
          image: "https://picsum.photos/id/12/200/200",
          title: "earum consequatur dicta",
          description: "Ea eos tempora nobis sit commodi ea.",
          hagstags: ["#fugit", "#expedita", "#unde", "#voluptas"]
        },
        {
          id: "77472f53-fde4-4fcf-9a85-ca37e0949eb4",
          image: "https://picsum.photos/id/13/200/200",
          title: "autem omnis blanditiis",
          description: "Culpa et quo distinctio modi aliquid delectus fuga dignissimos laborum.",
          hagstags: ["#velit", "#sit", "#qui", "#id"]
        },
        {
          id: "7304bba1-2dd1-403b-9815-83025da94832",
          image: "https://picsum.photos/id/14/200/200",
          title: "nesciunt est asperiores",
          description: "Dolores aspernatur ipsum debitis odit assumenda voluptatem.",
          hagstags: ["#rerum", "#autem", "#ipsum", "#consequatur"]
        },
        {
          id: "7f6c6253-2a65-4910-947f-f1ba0445f6ce",
          image: "https://picsum.photos/id/15/200/200",
          title: "fuga sunt cum",
          description: "Omnis et animi atque sunt dolorum ullam.",
          hagstags: ["#est", "#rerum", "#quaerat", "#quis"]
        },
        {
          id: "3f07fc4f-7fe0-450d-aa83-93d312450e11",
          image: "https://picsum.photos/id/16/200/200",
          title: "nemo laboriosam voluptatem",
          description: "Sit porro quo ratione fuga.",
          hagstags: ["#vero", "#a", "#vel", "#officiis"]
        },
        {
          id: "a0d7ea80-ab0f-4fd5-9a4a-77c6e31e5827",
          image: "https://picsum.photos/id/17/200/200",
          title: "deleniti aperiam ut",
          description: "Perspiciatis quo eos eaque vero maxime.",
          hagstags: ["#saepe", "#repudiandae", "#molestias", "#eos"]
        },
        {
          id: "547e1f3a-fa7a-455c-b2bb-2fb26fe96de1",
          image: "https://picsum.photos/id/18/200/200",
          title: "architecto itaque dolore",
          description: "Enim totam ex veritatis molestiae.",
          hagstags: ["#molestiae", "#possimus", "#quam", "#quasi"]
        },
        {
          id: "6ddfb244-fd9d-4ef1-aa1a-720f996737af",
          image: "https://picsum.photos/id/19/200/200",
          title: "qui quae harum",
          description: "Quia aut impedit impedit sapiente ducimus doloribus sapiente quo reiciendis.",
          hagstags: ["#natus", "#natus", "#dolor", "#qui"]
        }
      ]
    };
  },
  computed: {
    filteredApps() {
      const term = this.searchTerm.trim().toLowerCase();
      if (!term) {
        return this.apps;
      }

      return this.apps.filter(app => {
        return (
          app.title.toLowerCase().includes(term) ||
          app.description.toLowerCase().includes(term) ||
          app.hagstags.filter(tag => tag.toLowerCase().includes(term)).length
        );
      });
    }
  }
};
</script>
