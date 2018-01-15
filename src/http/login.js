import { baseURL } from '../config';
import http from './index';
import store from '../store'

export function login({id, password}) {
    const url = `api/user?id=${id}`;
    return http.get(url)
        .then(res => {
        	store.state.userInfo = res.data[0];
        	return res.data;
        });
}