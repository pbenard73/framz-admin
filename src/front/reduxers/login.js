export default new (class {
    state = {
        user: null,
    }

    actions = {
        login: (state, user) => {
            return { ...state, user }
        },
    }
})()
