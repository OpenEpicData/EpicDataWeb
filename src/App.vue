<template>
  <v-app>
    <v-container fluid>
      <v-main>
        <router-view />
        <div>
          <v-tabs-items v-model="tab">
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

    <v-navigation-drawer permanent right app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            EpicData
          </v-list-item-title>
          <v-list-item-subtitle>
            专注于游戏数据
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in drawerItems"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
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
    searchTag: null,
    drawerItems: [
      { title: "游戏新闻", icon: "mdi-newspaper", link: "news" },
      { title: "免费游戏", icon: "mdi-gift" }
    ]
  }),
  async mounted() {
    const freeGames = await (await fetch(this.url)).json();
    this.d = freeGames.data.Catalog.searchStore.elements;

    await this.fetchNews();
  }
};
</script>
