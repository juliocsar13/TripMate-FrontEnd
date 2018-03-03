
import authDataSource from "../../api/auth";

const state = {
    
}

const actions = {
    login({ dispatch, commit }, payload) {
        return authDataSource.login(payload)
            .then((response) => {
                const userId = response.data.userId;
                commit("AUTH_SUCCESS", response);
                dispatch("getUser", userId).then((resp) => {
                    // Idle
                    const timeIdle = (payload.keepMe) ? resp.user.sessionTime.maxSessionTime : resp.user.sessionTime.sessionTime;
                    utils.knowblyIdle(timeIdle);
                    VueCookie.set(`know_${utils.getSubDomain()}_time`, timeIdle, { expires: `${response.data.ttl}s`, domain: `.${utils.getDomain()}` });
                });
                authDataSource.domainClient().then((resp) => {
                    commit("AUTH_DOMAINS", resp.body.clients);
                });
            }, (error) => {
                commit("SET_LOGIN_STATUS", error.data.error);
            });
    },
    logout({ commit }, redirect = true) {
        if (VueCookie.get("know_auth")) {
            return authDataSource.logout({ sid: VueCookie.get("know_auth") })
                .then(() => {
                    commit("AUTH_LOGOUT", redirect);
                    Intercom("shutdown");
                });
        }
        return Promise.resolve();
    },
}

const getters = {
    
}

export default {
    actions,
    getters
}