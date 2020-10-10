import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: null as any,
    search: {
      tagTitle: ""
    }
  },
  mutations: {
    setNews(state, data) {
      state.news = data;
    },

    setSearch(state, data) {
      state.search = data;
    }
  },
  actions: {
    async pushNews({ commit, state }) {
      const search = state.search;
      const newsURL = `https://bird.ioliu.cn/v1?url=http://api.epicdata.net:1234/news/?tagTitle=${search.tagTitle}`;

      const resNews = await (await fetch(newsURL)).json();
      const res = resNews.news;
      commit("setNews", res);
    }
  },
  modules: {}
});
