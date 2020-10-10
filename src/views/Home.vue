<template>
  <v-container fill-height class="mt-12">
    <v-row align="center" justify="start" no-gutters>
      <v-col cols="12">
        <v-text-field
          filled
          append-icon="mdi-magnify"
          placeholder="专注于游戏数据服务"
          hide-details
          v-model="searchData"
          v-on:keyup.enter="search(searchData)"
        ></v-text-field>
      </v-col>

      <v-col cols="12" v-if="$store.state.news">
        <span v-for="(item, i) in $store.state.news.data.slice(0, 6)" :key="i">
          <span v-for="(t, k) in item.newsTags" :key="k">
            <v-chip
              v-if="t.similarity > 0.9"
              :class="{ orange: k < 4 }"
              :dark="k < 4"
              class="mr-2 mt-2"
              link
              @click="search(t.title)"
            >
              {{ t.title }}
              <v-icon v-if="k < 4" right small>
                mdi-fire
              </v-icon>
            </v-chip>
          </span>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    searchData: null
  }),
  async mounted() {
    const data = {
      tagTitle: ""
    };

    this.$store.commit("setSearch", data);

    await this.$store.dispatch("pushNews");
  },
  methods: {
    async search(tagTitle) {
      const data = {
        tagTitle: tagTitle
      };
      this.$store.commit("setSearch", data);

      this.$router.push("news");
    }
  }
};
</script>
