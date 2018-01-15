import Vue from 'vue';
import axios from 'axios'
import { baseURL } from '../config';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080',
	timeout: 1000
})

// Vue.http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axiosInstance;

