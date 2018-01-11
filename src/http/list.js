import { baseURL } from '../config';
import http from './index';

export function getList({id, page, limit, cate}) {
    const url = `${baseURL}/content`;
    const params = {id, cate, _page: page, _limit: limit};
    http.get(url, params)
        .then(res => console.log('login->', res));
}