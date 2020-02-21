<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="navList.colorCls">
      <dt>{{ navList.navTitle }}</dt>
      <dd
        v-for="item in navList.navContian"
        :key="item.tab"
        :class="{active : kind === item.tab}"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in results[kind]" :key="index">
        <el-card shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="cbody_name">
              <div class="title" :title="item.title">{{ item.title }}</div>
              <div class="sub-title" :title="item.subTitle">{{ item.subTitle }}</div>
            </div>
            <!-- <div class="price-info" v-if="!item.isSold"> -->
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <!-- <span class="current-price numfont">{{ item.price_info.curPrice }}</span> -->
                <span class="current-price numfont">{{ item.price }}</span>
              </span>
              <!-- <span class="old-price">门市价¥{{ item.price_info.oldPrice }}</span> -->
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <!-- <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="current-price numfont">抢光了</span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      kind: "all",
      results: {},
    }
  },
  props: ["navList"],
  mounted(){
    api.getContainList().then(res => {
      this.results = res.data.data
    })
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>