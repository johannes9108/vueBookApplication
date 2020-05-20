import Vue from "vue";
import Vuex from "vuex";
import data from "../assets/childrensbooks.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: data.books,
  },
  getters: {
    getBook: (state) => (id) => {
      return state.books.find((book) => book.id == id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
