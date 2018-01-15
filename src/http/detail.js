import { baseURL } from '../config';
import http from './index';
import store from '../store'


export function getContent({id, contentId}) {
    const url = `api/content?author=${id}&contentId=${contentId}`;
    const params = {id, contentId};
    return http.get(url, params)
        .then(res => {
        	console.log("detail.js>res>>", res)
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
        	store.state.list = listArr;
        	return res;
        });
}