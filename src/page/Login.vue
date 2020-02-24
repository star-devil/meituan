<template>
  <div class="page-login">
    <div class="login-header">
      <router-link :to="{name:'index'}"><a class="logo"></a></router-link>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <p v-if="error" class="tips">
          <i></i>
          {{ error }}
        </p>
        <p>
          <span class="login_title">账号登录</span>
        </p>
        <el-input
          :class="error?'error':''"
          v-model="userName"
          placeholder="手机号"
          prefix-icon="profile"
        ></el-input>
        <el-input
          :class="error?'error':''"
          v-model="password"
          placeholder="密码"
          type="password"
          prefix-icon="password"
        ></el-input>
        <div class="foot">
          <a href="#">忘记密码?</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          还没有账号？
          <a>
            <router-link :to="{name:'register'}">免费注册</router-link>
          </a>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <div class="login-footer"></div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data () {
        return {
            userName: '',
            password: '',
            error: ''
        }
    },
    methods: {
        submit () {
            if(!this.userName || !this.password){
                this.error = "请输入账号或密码"
                return false
            }
            api.login({
                params:{
                    userName: this.userName,
                    password: this.password
                }
            }).then(res => {
                console.log(res)
                if(res.data.status == "success"){
                    this.$router.push({name:'index'})
                }else{
                    this.error = res.data.msg
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>