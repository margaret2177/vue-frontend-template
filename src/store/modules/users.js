import axios from "axios";

const users = {
  state: () => ({
    isAuthenticated: false,
    userInfo: null,
    error: { name: "", message: "" },
  }),
  mutations: {},
  actions: {},
  getters: {},
};

export default users;
