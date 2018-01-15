<template>
    <div v-if="detail" style="padding: 10px">
        <h3>{{detail.title}}</h3>
        <div class="desc">发布&nbsp;&nbsp;{{detail.writeDate}}&nbsp;&nbsp;{{detail.creater}}</div>
        <div v-if="detail.modifiedDate" class="desc">修改&nbsp;&nbsp;{{detail.modifiedDate}}&nbsp;&nbsp;{{detail.creater}}</div>
        <div v-html="detail.content"></div>
    </div>
</template>
<script>
import { XHeader, Divider } from 'vux';
import { mapGetters } from 'vuex'
export default {
    components: {
        XHeader,
        Divider
    },
    computed: {
        detail() {
            return this.$store.state.list.detail;
        }
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('getDetailFn', { id });
    },
};

</script>
<style scoped>
    .desc{
        font-size: 14px;
        color: #999;
        line-height: 24px;
    }
</style>
