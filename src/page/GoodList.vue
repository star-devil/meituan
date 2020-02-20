<template>
    <div class="page-product">
        <el-row :span="24"  class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row class="m-product-categroy">
            <el-col :span="20">
                <m-nav />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="19">
                <m-list />
            </el-col>
            <el-col :span="5">
                猜你喜欢
            </el-col>
        </el-row>
    </div>
    
</template>

<script>
import Crumbs from '@/components/goodList/crumbs';
import MNav from '@/components/goodList/nav';
import MList from '@/components/goodList/list';
export default {
    components: {
        Crumbs,
        MNav,
        MList
    }
}
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
