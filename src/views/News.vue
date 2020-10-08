<template>
  <div>
    <v-row justify="space-between">
      <v-col cols="12" md="6">
        <div
          style="position:sticky;top:0;height:100vh;width:100%"
          v-if="hyperlink"
        >
          <iframe
            :src="hyperlink"
            frameborder="0"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-chip
          dark
          v-if="searchTag"
          color="orange"
          close
          @click:close="reload()"
        >
          {{ searchTag }}
        </v-chip>

        <div v-if="news">
          <div v-for="item in news.data" :key="item.title" class="my-5">
            <h2
              class="text-h4 font-weight-bold"
              @click="showNews(item.hyperlink)"
              style="cursor:pointer"
            >
              {{ item.title }}
            </h2>

            <h4 class="subtitle-1 orange--text text--darken-4">
              {{ item.description }}
            </h4>

            <v-chip
              v-for="(tag, k) in uniqueTagTitle(item.newsTags)"
              :key="k"
              class="my-2 mr-2"
              :class="{ orange: tag.title == searchTag }"
              :dark="tag.title == searchTag"
              link
              @click="search(tag.title)"
            >
              {{ tag.title }} | {{ tag.similarity * 100 }}%
            </v-chip>

            <v-divider class="my-5" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { unionBy } from "lodash";
export default {
  name: "News",

  data: () => ({
    hyperlink: null,
    showModal: false,
    news: null,
    newsPath: "https://bird.ioliu.cn/v1?url=http://api.epicdata.net:1234/news/",
    searchTag: null
  }),
  async mounted() {
    await this.fetchNews();
  },
  methods: {
    async fetchNews() {
      const resNews = await (await fetch(this.newsPath)).json();
      this.news = resNews.news;
      this.hyperlink = this.news.data[0].hyperlink;
    },
    showNews(hyperlink) {
      this.hyperlink = hyperlink;
    },
    async search(tagTitle) {
      this.searchTag = tagTitle;
      const news = await (
        await fetch(this.newsPath + `?tagTitle=${tagTitle}`)
      ).json();
      this.news = news.news;
      this.hyperlink = this.news.data[0].hyperlink;
    },
    uniqueTagTitle(data) {
      return unionBy(data, "title");
    },
    async reload() {
      await this.fetchNews();
      this.searchTag = null;
    }
  }
};
</script>
