<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-list :navList="scenes"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-list :navList="sale"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-list :navList="movie"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MMenu from "@/components/index/menu";
import MLife from "@/components/index/life";
import MList from "@/components/index/container";
export default {
    data() {
        return {
            scenes:{
                navTitle: "有格调",
                colorCls: "gediao",
                navContian: [{
                    tab: "all",
                    text: "全部"
                },{
                    tab: "food",
                    text: "约会聚餐"
                },{
                    tab: "spa",
                    text: "丽人SPA"
                },{
                    tab: "travel",
                    text: "品质出游"
                }]
            },
            sale:{
                navTitle: "狠优惠",
                colorCls: "youhui",
                navContian: [{
                    tab: "all",
                    text: "全部"
                },{
                    tab: "delicious",
                    text: "美食"
                },{
                    tab: "leisure",
                    text: "休闲"
                }]
            },
            movie:{
                navTitle: "猫眼电影",
                colorCls: "film",
                navContian: [{
                    tab: "hotFilms",
                    text: "正在热映"
                },{
                    tab: "comingFilms",
                    text: "即将上映"
                }]
            }
        }
    },
    components: {
        MMenu,
        MLife,
        MList
    }

}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
@import "@/assets/css/index/artistic.scss";
</style>