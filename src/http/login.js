import { baseURL } from '../config';
import http from './index';

export function login({loginName, password}) {
    const url = `/api/user?loginName=${loginName}`;
    http.get(url)
        .then(res => console.log('login->', res));
}