<template>
    <div class="login">
        <div class="logo"><img src="../assets/logo-kfc.svg" alt="logo"></div>
        <!-- 手机号 -->
        <InputGroup type="number" v-model="phone" placeholder="手机号" :btnTitle="btnTitle" :disabled="disabled" :error="errors.phone"></InputGroup>
        <!-- 验证码 -->
        <InputGroup type="number" v-model="verifyCode" placeholder="验证码"  :error="errors.code"></InputGroup>

        <!-- 用户协议 -->
        <div class="login_des">
            <p>
                新用户登录即注册,表示已同意
                <span>《用户服务协议》</span>
            </p>
        </div>
        <!-- 登录 -->
        <div class="login_btn">
            <button>登录</button>
        </div>
        
    </div>
</template>

<script>
import InputGroup from "../components/Inputgroup.vue"
    export default {
        name:'login',
        data() {
            return {
                phone: '',
                verifyCode:'',
                errors:{},
                btnTitle:"获取验证码",
                disabled:false,
            }
        },
        methods: {
            getVerifyCode() {
                if (this.validatePhone()) {
                    // 发送网络请求
                }
            },
            validatePhone(){
                if(!this.phone){
                    this.errors = {
                        phone:'手机号不能为空'
                    };
                    return false
                }else if (!/^1[3456789]\d{9}$/.test(this.phone)){
                    this.errors = {
                        phone:'请写上正确的手机号',
                    }
                    return false
                }else{
                    this.errors = {}
                    return true
                }
            },
        },
        components: {
            InputGroup,
        },
    }
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100px;
    padding: 30px;
    box-sizing: border-box;
    background: #fff;
}

.logo {
    text-align: center;
    .img{
        width: 150px;
    }
}
</style>