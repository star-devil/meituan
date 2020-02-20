<template>
  <div>
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in menuList" :key="item.type">
        <m-nav-select :name="item.title" :navList="item.sub_list" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in areaList" :key="index">
        <m-nav-select :name="item.title" :navList="item.sub_list" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MNavSelect from "@/components/goodList/select";
export default {
  data() {
    return {
      menuList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            {
              name: "饮品店",
              id: "yinpindain"
            },
            {
              name: "小吃快餐",
              id: "snake"
            },
            {
              name: "聚餐宴请",
              id: "jucan"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotel",
          sub_list: [
            {
              name: "经济型酒店",
              id: "jingji"
            },
            {
              name: "低星级酒店",
              id: "lowerStar"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",
          sub_list: [
            {
              name: "人民广场",
              id: "renminSquare"
            }
          ]
        },
        {
          title: "浦东新区",
          sub_list: [
            {
              name: "陆家嘴",
              id: "lujiazui"
            },
            {
              name: "世纪公园",
              id: "shijigongyuan"
            }
          ]
        }
      ]
    };
  },
  components: {
    MNavSelect
  }
};
</script>

<style lang="scss">
</style>