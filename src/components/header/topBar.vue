<template>
    <el-row class="m-header-topbar">
        <el-col :span="10">
            <m-geo/>
        </el-col>
        <el-col :span="14">
            <m-nav/>
        </el-col>
    </el-row>
</template>

<script>
import MGeo from './geo'
import MNav from './nav'
export default {
  components: {
    MGeo,
    MNav
  }
}
</script>
