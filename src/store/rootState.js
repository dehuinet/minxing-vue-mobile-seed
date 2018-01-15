const state = {
    user: {
        id: "",
        name: "",
        token: ""
    },

    list: {
        query: {
            page: 1,
            limit: 5,
            cate: null,
        },
        full: false,
        data: [],
        detail:{},
        scrollTop: null
    },
}
state.user = window.localStorage['VUE_DEMO_USER'] ? JSON.parse(window.localStorage['VUE_DEMO_USER']) : state.user;
console.log('state->', state);

export default state;
