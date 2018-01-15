<template>
    <div>
        <div class="center">
            <svg style="width:60px;height:60px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">
                <path class="svgpath" data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" />
            </svg>
        </div>
        <group>
            <x-input title="工号" type="text" placeholder="请输入工号" v-model="id" label-width='80' text-align='left'></x-input>
            <x-input title="密码" type="password" placeholder="请输入密码" v-model="password" label-width='80' text-align='left'></x-input>
        </group>
        <x-button :text="submitBtnText" :disabled="enableSubmit" :show-loading="submitStatus" @click.native="login" type="primary"></x-button>
    </div>
</template>
<script>
import { Cell, Group, Badge, Divider, XInput, XButton, AlertModule } from 'vux'
import { login } from '../http/login';
export default {
    components: {
        Cell,
        Group,
        Badge,
        Divider,
        XInput,
        XButton,
        AlertModule
    },
    data() {
        return {
            submitStatus: false,
            id: '001170',
            password: '123456',
        }
    },
    computed: {
        enableSubmit() {
            return !(!!this.id && !!this.password)
        },
        submitBtnText() {
            return this.submitStatus ? '登录中' : '登录'
        }
    },
    methods: {
        login() {
            var vm = this;
            vm.submitStatus = true;
            vm.$store.dispatch('loginFn', {
                id: vm.id,
                password: vm.password
            })
            .then(() => vm.$router.push('query'))
            .catch(e => console.log('登录失败', e));
        }
    }
}

</script>
<style scoped>
.vue-version {
    text-align: center;
    font-size: 12px;
    color: #ccc;
}

.center {
    margin-top: 15px;
    text-align: center;
}

.vux-notice {
    color: #666;
    line-height: 40px;
}

.demo-icon {
    margin-right: 15px;
}

.vux-title {
    vertical-align: middle;
    text-align: center;
    color: #04BE02;
    display: inline-block;
    width: 75px;
    height: 75px;
    line-height: 75px;
    border-radius: 50%;
}

</style>
