<template>
  <div class="login">
    <div class="logo"><img src="../assets/logo.svg" alt="logo" /></div>
    <!-- 手机号 -->
    <InputGroup
      type="number"
      v-model="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    ></InputGroup>
    <!-- 验证码 -->
    <InputGroup
      type="number"
      v-model="verifyCode"
      placeholder="验证码"
      :error="errors.code"
    ></InputGroup>

    <!-- 用户协议 -->
    <div class="login_des">
      <p>
        新用户登录即注册,表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录 -->
    <div class="login_btn">
      <button :disabled="isClick" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/Inputgroup.vue";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false,
    };
  },
  computed: {
    isClick() {
        if(!this.phone || !this.verifyCode) return true;
        else return false
    }
  },
  methods: {
    login(){
        // 取消错误提醒
        this.errors = {};
        // 发送请求
        // this.axios.post("/v1_0/sms/codes/:mobile",{
        //     mobile:this.phone,
        // })


        if(this.verifyCode == 111111){
            localStorage.setItem("ele_login",true)
            this.$router.push('/')
        };
    },
    getVerifyCode() {
      if (this.validatePhone()) {
        // 发送网络请求
        this.validateBtn();
      }
    },
    validateBtn(){
        let time = 30;
        let timer = setInterval(() => {
            if(time == 0){
                clearInterval(timer);
                this.btnTitle = "获取验证码"
                this.disabled = false;
            }else{
                // 倒计时
                this.btnTitle = time + "秒后重试";
                this.disabled = true;
                time --;
            }
        },1000);
    },
    validatePhone() {
        // 验证手机号码
      if (!this.phone) {
        this.errors = {
          phone: "手机号不能为空",
        };
        return false;
      } else if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请写上正确的手机号",
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
  },
  components: {
    InputGroup,
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 100px;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}

.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}

.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}

.login_btn button[disabled]{
    background-color: #8bda81;
}
</style>
