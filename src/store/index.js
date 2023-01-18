import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    alphabet: [],
    page: 1,
    limit: 100,
    totalPages: 0,
    allUsers:[],
  },
  getters: {
    users(state) {
      return state.users;
    },
    alphabet(state) {
    return state.alphabet =  state.users.sort((a, b) =>a.first_name.localeCompare(b.first_name));
    },
    allUsers(state){
      return state.allUsers
    },

  },
  mutations: {
    setData(state, response) {
      state.users = [...state.users, ...response];
    },
    setAllUsers(state, response){
      state.allUsers = response
    }
  },
  actions: {
    async loadData({ commit, state }) {
      return axios
        .get("http://localhost:3000/users", {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        })
        .then((response) => {
          state.totalPages = response.headers["x-total-count"] / state.limit;
          state.page += 1;
          commit("setData", response.data);
        });
    },
    async loadAllData({commit}) {
      return axios
        .get("http://localhost:3000/users")
        .then((response) => {
          commit("setAllUsers", response.data);
        });
    },

  },
  modules: {},
});
