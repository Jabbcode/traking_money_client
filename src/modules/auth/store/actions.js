import {
    LoginService,
    LogoutService,
    RegisterService,
    VerifyAuthenticationService
} from "../../../services/auth.service";

export const onLogin = async ({ commit }, formUser) => {

    try {
        const { data } = await LoginService(formUser);

        const access_token = data.access_token
        const user = data.user

        delete data.user.created_at;
        delete data.user.updated_at;

        commit('onLogin', { user, access_token })
    } catch (error) {
        console.log(error);
        commit("onLogout");
    }
};

export const onRegister = async ({ commit }, formUser) => {

    try {
        const { data } = await RegisterService(formUser);

        const access_token = data.access_token;
        const user = data.user;

        delete data.user.created_at;
        delete data.user.updated_at;

        commit('onLogin', { user, access_token });
    } catch (error) {
        console.log(error);
        commit("onLogout");
    }
};

export const onLogout = async ({ commit }) => {

    try {
        await LogoutService()
        commit("onLogout");

    } catch (error) {
        console.log(error);
        commit("onLogout");
    }
};


export const onVerifyToken = async ({ commit }) => {

    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
        commit('onLogout');
        return 'not-authenticated';
    };

    try {
        const { data } = await VerifyAuthenticationService();

        if (data.message === 'Authenticated') {
            delete data.user.created_at
            delete data.user.updated_at

            commit('onLogin', { user: data.user, token: data.access_token })

            return data.message
        }

    } catch (error) {
        console.log(error);
        commit('onLogout');
    }
};