import Vue from "vue";
import Vuex from "vuex";
import VuePaginate from "vue-paginate";
import auth from "./modules/auth";
import users from "./modules/users";

Vue.use(Vuex);
Vue.use(VuePaginate);

export default new Vuex.Store({
    modules: {
        users,
    }
});
