<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <a class="takeout">美团外卖</a>
        </li>
        <li>
          <a class="movie">猫眼电影</a>
        </li>
        <li>
          <a class="hotel">美团酒店</a>
        </li>
        <li>
          <a class="apartment">民宿/公寓</a>
        </li>
        <li>
          <a class="boss">商家入驻</a>
        </li>
        <li>
          <a class="business">美团公益</a>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <m-slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          </h4>
          <p class="m-life-login-name">Hi！你好</p>
          <p>
            <el-row type="flex" justify="center">
              <router-link :to="{name: 'regist'}">
                <el-button round>注册</el-button>
              </router-link>
            </el-row>
            <el-row>
              <router-link :to="{name: 'login'}">
                <el-button round>立即登录</el-button>
              </router-link>
            </el-row>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span class="red">1元起</span>
            <span class="gary">吃喝玩乐</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MSlider from "@/components/index/slider";
export default {
  components: {
    MSlider
  }
};
</script>
