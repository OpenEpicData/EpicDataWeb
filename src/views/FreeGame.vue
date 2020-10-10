<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="5">
        <div v-if="data">
          <div v-for="item in data" :key="item.title" class="my-5">
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

        <v-progress-linear
          v-else
          indeterminate
          color="orange"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FreeGame",

  data: () => ({
    url:
      "https://bird.ioliu.cn/v1?url=https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?locale=zh-CN&country=TW&allowCountries=TW",
    data: null,
    searchTag: null,
    drawerItems: [
      { title: "游戏新闻", icon: "mdi-newspaper", link: "news" },
      { title: "免费游戏", icon: "mdi-gift" }
    ]
  }),
  async mounted() {
    const freeGames = await (await fetch(this.url)).json();
    this.data = freeGames.data.Catalog.searchStore.elements;
  }
};
</script>
