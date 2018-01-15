<template>
    <div>
        <panel :header="titile" :list="list" :type="type" @on-click-item="checkDetail"></panel>
        <div @click='loadMore'>
            <load-more :show-loading="showLoading" :tip="tip"></load-more>
        </div>
    </div>
</template>
<script>
import { Panel, LoadMore } from 'vux';
import * as types from '../store/types.js';

export default {
    components: {
        Panel,
        LoadMore
    },
    data() {
        var vm = this;
        return {
            type: '4',
            showLoading: false
        }
    },
    methods: {
        checkDetail(item) {
            var vm = this;
            vm.$router.push('list/' + item.contentId);
        },
        loadMore() {
            var vm = this;
            if (!vm.showLoading && !this.$store.state.list.full) {
                vm.showLoading = true;
                vm.$store.dispatch('getMoreList').then(function(res) {
                    vm.showLoading = false;
                })
            }
        }
    },
    computed: {
        titile() {
            var vm = this;
            switch (vm.$store.state.queryInfo.cate) {
                case 20:
                    return "全行要闻";
                    break;
                case 22:
                    return "领导讲话";
                    break;
                case 23:
                    return "总部动态";
                    break;
                case 24:
                    return "分支行工作动态";
                    break;
                default:
                    return "新闻列表"
            }
        },
        list() {
            return vm.$store.state.list.data
        },
        tip() { 
            if (vm.showLoading) {
                return '正在加载'
            }
            return this.$store.state.list.full
                ? '暂无更多数据'
                : '点击加载更多数据';
        }
    },
    created() {
        var vm = this;
    }
};

</script>
<style scoped>
.xInput {
    position: relative;
    top: -10px;
}

</style>
