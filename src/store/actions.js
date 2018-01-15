import { login } from '../http/login';
import { getList } from '../http/list';
import * as types from './types.js';

export const loginFn = ({
    commit,
    state
}, payload) => {
    return login(payload)
        .then(res => {
            return res;
        })
}

//  根据栏目 初始化LIST
export const getListFn = ({
    commit,
    state
}, payload) => {
    commit(types.QUERY_INIT, payload);

    var params = {
        ...state.queryInfo,
        id: state.userInfo.id,
    }
    return getList(params)
        .then(data => {
            commit(types.LIST_INIT, {
                list: data
            });
            return res;
        })
}

// 加载更多 PAGE++
export const getMoreList = ({
    commit,
    state
}) => {
    commit(types.QUERY_LOAD_MORE);
    var params = {
        ...state.queryInfo,
        id: state.userInfo.id,
    }
    return getList(params)
        .then(data => {
            commit(types.LIST_LOAD_MORE, {
                list: data
            })
            return res;
        })
}