<template>
  <v-app>
    <v-container fluid>
      <v-main>
        <div class="text-center" v-if="!hyperlink">
          <div class="text-h2 font-weight-black">
            <v-icon size="128" color="orange darken-4">
              mdi-chart-box-outline
            </v-icon>

            <br />
            EpicData
          </div>
        </div>

        <div class="mt-12">
          <v-row justify="end">
            <v-col cols="12" md="5">
              <v-tabs v-model="tab" icons-and-text color="orange darken-4">
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#news">
                  <h3>
                    游戏新闻（机器学习）
                  </h3>
                </v-tab>

                <v-tab href="#free-games">
                  <h3>
                    领取免费游戏
                  </h3>
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>

          <v-tabs-items v-model="tab">
            <v-tab-item value="news">
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
                    <div
                      v-for="item in news.data"
                      :key="item.title"
                      class="my-5"
                    >
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
            </v-tab-item>

            <v-tab-item value="free-games">
              <v-row justify="center">
                <v-col cols="12" md="10">
                  <div v-if="d">
                    <div v-for="item in d" :key="item.title" class="my-5">
                      <h2 class="text-h4 font-weight-bold">
                        {{ item.title }}
                      </h2>

                      <h4 class="subtitle-1 orange--text text--darken-4">
                        释放时间：{{ item.effectiveDate }}
                      </h4>

                      <div class="my-5">
                        <v-btn
                          large
                          depressed
                          color="blue lighten-4"
                          :href="
                            `https://www.epicgames.com/store/product/${item.productSlug}`
                          "
                          target="_black"
                        >
                          <span>在 EpicGames 上领取</span>
                          <v-icon right>
                            mdi-link
                          </v-icon>
                        </v-btn>
                      </div>

                      <v-divider class="my-5" />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import { unionBy } from "lodash";
export default {
  name: "App",

  data: () => ({
    tab: "news",
    hyperlink: null,
    showModal: false,
    url:
      "https://bird.ioliu.cn/v1?url=https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?locale=zh-CN&country=TW&allowCountries=TW",
    d: null,
    news: null,
    newsPath: "https://bird.ioliu.cn/v1?url=http://api.epicdata.net:1234/news/",
    searchTag: null
  }),
  async mounted() {
    const freeGames = await (await fetch(this.url)).json();
    this.d = freeGames.data.Catalog.searchStore.elements;

    await this.fetchNews();
  },
  methods: {
    async fetchNews() {
      console.log(1);
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
    }
  }
};
</script>
