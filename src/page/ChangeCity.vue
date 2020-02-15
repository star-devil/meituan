<template>
  <div class="page-changeCity">
    <el-row class="m-iselect">
        <province />
    </el-row>
    <el-row class="m-iselect">
        <h-city title="热门城市：" :cityList="hotCityList"/>
    </el-row>
    <el-row class="m-iselect">
        <h-city title="最近访问：" :cityList="oftenCityList"/>
    </el-row>
    <el-row class="m-iselect">
        <category />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/Province"
import HCity from "@/components/changeCity/HotCity"
import Category from "@/components/changeCity/Category"
export default {
    data() {
        return {
            hotCityList: ["北京","上海","广州","深圳","天津","西安","重庆","杭州","南京","武汉","成都"],
            oftenCityList: ["上海","大连","彰化"]
        }
    },
    components: {
        Province,
        HCity,
        Category
    }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
@import "@/assets/css/changecity/select.scss";
@import "@/assets/css/changecity/hot.scss";
</style>