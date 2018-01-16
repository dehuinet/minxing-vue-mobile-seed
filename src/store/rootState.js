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
console.log("window.localStorage['VUE_DEMO_USER']",window.localStorage['VUE_DEMO_USER'])
if (window.localStorage['VUE_DEMO_USER']) {
    console.log('has ls', typeof window.localStorage['VUE_DEMO_USER']);
    state.user = JSON.parse(window.localStorage['VUE_DEMO_USER']);
} 
// state.user = window.localStorage['VUE_DEMO_USER'] 
//     ? JSON.parse(window.localStorage['VUE_DEMO_USER'])
//     : state.user;
console.log('state->', state);

export default state;
