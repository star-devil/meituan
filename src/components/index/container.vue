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
      <li v-for="(item,index) in containList" :key="index">
        <el-card shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="cbody_name">
              <div class="title" :title="item.title">{{ item.title }}</div>
              <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
            </div>
            <div class="price-info" v-if="!item.isSold">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.curPrice }}</span>
              </span>
              <span class="old-price">门市价¥{{ item.price_info.oldPrice }}</span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "all",
      containList: [
        {
          image:
            "//p1.meituan.net/msmerchant/422681c866afd759d241188f0f0c7345150350.jpg@460w_260h_1e_1c",
          title: "幸福西饼生日蛋糕（中信店）",
          sub_title:
            "【蛋糕】S四重奏/榴芒双拼/鲜果嘉年华/榴莲香雪（4选1）1个，约2磅，方形",
          price_info: {
            curPrice: "188",
            oldPrice: "296"
          },
          isSold: null,
          address: "四川北路/海伦路"
        },
        {
          image:
            "//p1.meituan.net/msmerchant/c105540586f72f0ae600e596346ed83d271574.png@460w_260h_1e_1c",
          title: "MODO0991辣风芹•疆派料理",
          sub_title: "新疆炒米粉单人套餐",
          price_info: {
            curPrice: "48",
            oldPrice: "64"
          },
          isSold: null,
          address: "人民广场/南京路"
        },
        {
          image:
            "//p1.meituan.net/msmerchant/696c801356feef6c4e7f0b9abddd1d7a67158.jpg@460w_260h_1e_1c",
          title: "牛藏烧肉日本料理",
          sub_title: "日式骨付香肠1份",
          price_info: {
            curPrice: "23",
            oldPrice: "35"
          },
          isSold: null,
          address: "南京西路"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/ddf495d2b5e89362857da7fa39a4e9c7104516.jpg@460w_260h_1e_1c",
          title: "王品牛排（仙乐斯店）",
          sub_title: "单人午市套餐B，提供免费WiFi",
          price_info: {
            curPrice: "197",
            oldPrice: "296"
          },
          isSold: true,
          address: "人民广场/南京路"
        },
        {
          image:
            "//p0.meituan.net/bbia/7c433354285acbabf9972b3a607e7bb795437.jpg@460w_260h_1e_1c",
          title: "摩尼卡",
          sub_title:
            "人气推荐：10英寸开心益点欧式水果生日蛋糕新鲜现做首图向左划查看更多款1个，约10英寸，圆",
          price_info: {
            curPrice: "106",
            oldPrice: "198"
          },
          isSold: null,
          address: "迪士尼"
        },
        {
          image:
            "//p0.meituan.net/bbia/c63505335fd950e3a56d352fe4be41eb138325.jpg@460w_260h_1e_1c",
          title: "米兰西饼生日蛋糕（闵行分店）",
          sub_title: "蛋糕20选1,约8英寸",
          price_info: {
            curPrice: "89",
            oldPrice: "168"
          },
          isSold: null,
          address: "莘庄"
        }
      ]
    };
  },
  props: ["navList"],
  mounted(){
    console.log(this.navList);
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