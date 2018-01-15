<template>
    <div>
        <div v-if="detail" style="padding: 10px">
            <h3>{{detail.title}}</h3>
            <div class="desc">发布&nbsp;&nbsp;{{detail.writeDate}}&nbsp;&nbsp;{{detail.creater}}</div>
            <div v-if="detail.modifiedDate" class="desc">修改&nbsp;&nbsp;{{detail.modifiedDate}}&nbsp;&nbsp;{{detail.creater}}</div>
            <div v-html="detail.content"></div>
        </div>
        <loading :show='loading' text="loading"></loading>
    </div>
</template>
<script>
import { XHeader, Divider, Loading, TransferDomDirective as TransferDom } from 'vux';
import { mapGetters } from 'vuex'
export default {
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        Divider,
        Loading
    },
    data() {
        return {
            loading: true
        }
    },
    computed: {
        detail() {
            return this.$store.state.list.detail;
        }
    },
    created() {
        var vm = this;
        const id = this.$route.params.id;
        vm.$store.dispatch('getDetailFn', { id }).then(function() {
            vm.loading = false
        });
    },
};

</script>
<style scoped>
.desc {
    font-size: 14px;
    color: #999;
    line-height: 24px;
}

</style>
