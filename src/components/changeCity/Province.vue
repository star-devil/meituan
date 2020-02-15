<template>
  <div class="m-province">
    <span class="name">
      按省份选择：
      <m-select
        :value="province"
        title="省份"
        :provinceList="provinceList"
        @change_select="clickProSelect"
        :showChooseContent="chooseProFlag"
      />
      <m-select
        :value="city"
        title="城市"
        :provinceList="cityList"
        @change_select="clickCitySelect"
        :showChooseContent="chooseCityFlag"
      />
    </span>
    <span class="citySearch">直接搜索：</span>
    <el-select
    v-model="searchWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入城市中文或拼音"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in cityList"
      :key="item"
      :value="item">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import MSelect from "@/components/changeCity/Select";
export default {
  data() {
    return {
      showChooseContent: false,
      chooseProFlag: false,
      chooseCityFlag: false,
      province: "省份",
      provinceList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州"
      ],
      city: "城市",
      cityList: ["兰州", "金昌", "白银", "天水"],
      searchWord: "",
      loading: false
    };
  },
  components: {
    MSelect
  },
  methods: {
    clickProSelect(flag) {
      this.chooseProFlag = flag;
      if (flag) {
        this.chooseCityFlag = false;
      }
    },
    clickCitySelect(flag) {
      this.chooseCityFlag = flag;
      if (flag) {
        this.chooseProFlag = false;
      }
    },
    remoteMethod(val) {
        // 请求后端接口
        console.log(document.cookie, localStorage)
    }
  }
};
</script>

<style lang="scss">
</style>