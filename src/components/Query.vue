<template>
    <div>
        <group>
            <div class="title">请选择需要查询的栏目</div>
            <popup-radio title="栏目" :options="options" v-model="option" placeholder="请选择"></popup-radio>
        </group>
        <x-button class="m-top" :text="submitBtnText" :disabled="enableQuery" :show-loading="queryStatus" @click.native="query" type="primary"></x-button>
    </div>
</template>
<script>
import { Group, PopupRadio, XButton } from 'vux'

export default {
    components: {
        Group,
        PopupRadio,
        XButton
    },
    data() {
        return {
            queryStatus: false,
            option: '',
            options: [{
                key: 20,
                value: '全行要闻'
            }, {
                key: 22,
                value: '领导讲话'
            }, {
                key: 23,
                value: '总部动态'
            }, {
                key: 24,
                value: '分支行工作动态'
            }]
        }
    },
    computed: {
        enableQuery() {
            return !(!!this.option)
        },
        submitBtnText() {
            return this.queryStatus ? '查询中' : '查询'
        },
    },
    methods: {
        query() {
            var vm = this;
            vm.queryStatus = true;
            vm.$store.dispatch('getListFn', {
                cate: vm.option
            }).then(function(res) {
                if (vm.$store.state.list.length > 0) {
                    vm.$router.push('list');
                }else{
                    alert('暂无数据');
                }
            })
        },
    }
}

</script>
<style scoped>
.title {
    margin-left: 0.8em;
    color: #ccc;
    font-size: 16px;
    line-height: 40px;
}

.m-top {
    margin-top: 50px;
}

</style>
