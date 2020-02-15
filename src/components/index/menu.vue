<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i class="iconfontNew" :class="item.icon"></i>
        {{ item.title }}
        <i class="nav-right-arrow"></i>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template v-for="(item,index) in curDetail.children">
            <h4 :key="index +'_'+ item.title">{{ item.title }}</h4>
            <span v-for="(v,i) in item.children" :key="v +'_'+ i">{{ v }}</span>
        </template>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            curDetail: null,
            menuList: [{
                title: "美食",
                icon: "food",
                children: [{
                    title: "美食",
                    children: ["代金券","甜点饮品","火锅","自助餐","小吃快餐","日韩料理","西餐","聚餐宴请","烧烤烤肉","东北菜","川湘菜","江浙菜"]
                }]
            },{
                title: "外卖",
                icon: "takeout",
                children: [{
                    title: "外卖",
                    children: ["美团外卖"]
                }]
            },{
                title: "酒店",
                icon: "hotel",
                children: [{
                    title: "酒店星级",
                    children: ["经济型","舒适/三星","高档/四星","豪华/五星"]
                }]
            }]
        }
    },
    methods:{
        menuEnter(item) {
            this.curDetail = item;
        },
        menuLeave() {
            let self = this;
            this.timer = setTimeout(() => {
                self.curDetail = null;
            }, 200);
        },
        detailEnter() {
            clearTimeout(this.timer);
        },
        detailLeave() {
            this.curDetail = null;
        }
    }
};
</script>

<style lang="scss">
</style>