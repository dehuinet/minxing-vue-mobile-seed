import { baseURL } from '../config';
import http from './index';
import store from '../store'


export function getList({id, page, limit, cate}) {
    const url = `api/list?author=${id}&_page=${page}&_limit=${limit}&cate=${cate}`;
    const params = {id, page, limit, cate};
    return http.get(url, params)
        .then(res => {
        	console.log("list.js>res>>", res)
        	let data = res.data;
        	let listArr = [];
        	let listObj = {};
        	for (let i = 0; i < data.length; i++) {
        		for (let j = 0; j < data[i].length; j++) {
			        listObj[data[i][j].title] = data[i][j].value
			    };
			    listObj.meta ={
			    	source:listObj.source,
			    	date:listObj.writeDate
			    }
			    listArr.push(JSON.parse(JSON.stringify(listObj)))
        	}
        	
		    
        
        	console.log("store.state.list>>>",store.state.list);

        	return listArr;
        });
}