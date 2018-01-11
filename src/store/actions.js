
import {login} from '../http/login';

export function login({
    commit
},payload)  {
    login(payload)
        .then(data => {
            ls.setItem(data);
            commit(data); // id 
        })
}

export function getList({
    commit
}) {
    
}