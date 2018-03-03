import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

const root = process.env.API_DATA_ROOT;

const auth = {
    login(credentials) {
        return Vue.http.post(`${root}/my-user/user-login`, credentials)
            .then(response => Promise.resolve(response));
    },
    logout() {
        return Vue.http.post(`${root}/my-user/logout`, {});
    },
    getUser(id) {
        return Vue.http.get(`${root}/my-user/${id}/data`)
            .then(response => Promise.resolve(response.data));
    }
};

export default auth;
