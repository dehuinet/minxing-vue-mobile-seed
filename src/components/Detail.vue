<template>
    <div style="padding: 10px">
        <h3>{{title}}</h3>
        <div class="desc">发布&nbsp;&nbsp;{{creatTime}}&nbsp;&nbsp;{{id}}</div>
        <div v-if="updateTime" class="desc">修改&nbsp;&nbsp;{{updateTime}}&nbsp;&nbsp;{{id}}</div>
        <div v-html="content"></div>
    </div>
</template>
<script>
import { XHeader, Divider } from 'vux';
export default {
    components: {
        XHeader,
        Divider
    },
    data() {
        var vm = this;
        return {
            currIndex: vm.$route.params.id
        }
    },
    computed: {
        title() {
            return this.$store.state.list[this.currIndex].title
        },
        creatTime() {
            return this.$store.state.list[this.currIndex].writeDate
        },
        updateTime() {
            return this.$store.state.list[this.currIndex].modifiedDate
        },
        id() {
            return this.$store.state.list[this.currIndex].creater
        },
        content() {
            return this.$store.state.list[this.currIndex].content
        }
    },
    created() {
        
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
