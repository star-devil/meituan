<template>
  <div class="m-province">
    <span class="name">
      按省份选择：
      <m-select
        :value="province"
        title="省份"
        :provinceList="proList"
        @change_select="clickProSelect"
        @change="choosenPro"
        :showChooseContent="chooseProFlag"
      />
      <m-select
        :value="city"
        title="城市"
        :provinceList="cityList"
        @change_select="clickCitySelect"
        @change="choosenCity"
        :showChooseContent="chooseCityFlag"
        :disabled="cityDisabled"
        className="city"
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
      :key="item.id"
      :value="item">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import MSelect from "@/components/changeCity/Select";
import api from '@/api/index.js'
export default {
  data() {
    return {
      showChooseContent: false,
      chooseProFlag: false,
      chooseCityFlag: false,
      province: "省份",
      proList: [],
      city: "城市",
      cityList: [],
      searchWord: "",
      loading: false,
      cityDisabled: true,
    };
  },
  mounted() {
    api.getProvince().then(res=> {
      this.proList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      })
    })
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
    choosenPro(item) {
      console.log(item)
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    choosenCity(item) {
      this.city = item.name;
      this.$store.dispatch('setPosition',item);
      this.$router.push({name: 'index'})
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