
import * as types from './types.js'

// 设置当前人员工号
export const setCurrId = (state, payload) => {
	state.currId = payload;
};

// 设置当前栏目Id
export const setColumnId = (state, payload) => {
	state.columnId = payload;
};


export default {
	[types.QUERY_INIT]: (state, payload) => {
		state.queryInfo = {
			...state.queryInfo,
			...payload,
			page: 1
		}
	},
	[types.QUERY_LOAD_MORE]: (state) => {
		state.queryInfo = {
			...state.queryInfo,
			page: state.queryInfo.page + 1
		}
	},
	[types.LIST_INIT]: (state, {list}) => {
		const full = list.length < state.queryInfo.limit;
		state.list = {
			full,
			data: list
		}
	},
	[types.LIST_LOAD_MORE]: (state, {list}) => {
		const full = list.length < state.queryInfo.limit;
		state.list = {
			full,
			data: [...state.list.data, ...list]
		}
	}
}