const state = {
    userInfo: {
        id: 0,
        loginName: "",
        name: "",
        password: "",
        token: ""
    },
    queryInfo: {
        page: 1,
        limit: 5,
        cate: 20, 
    },
    list: {
        full: false,
        data: []
    },
    contentId:0,
}
export default state;
