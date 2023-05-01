
export const onLogin = (state, { user, access_token }) => {

    if (access_token) {
        localStorage.setItem('access_token', access_token)
        state.access_token = access_token
    }

    state.user = user
    state.status = 'Authenticated'
}

export const onLogout = (state) => {
    state.user = null
    state.access_token = null
    state.status = 'not-authenticated'

    localStorage.clear()
}