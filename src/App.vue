<template>
  <v-app>
    <div>
      <v-main>
        <router-view />
      </v-main>
    </div>

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
    drawerItems: [
      { title: "搜索", icon: "mdi-magnify", link: "/" },
      { title: "游戏新闻", icon: "mdi-newspaper", link: "news" },
      { title: "免费游戏", icon: "mdi-gift", link: "free-games" }
    ]
  })
};
</script>
