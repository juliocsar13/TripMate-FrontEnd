import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

const root = process.env.API_DATA_ROOT;

export default {
    register(data) {
        return Vue.http.post(`${root}/users`, data)
            .then(response => response.data)
    }
}