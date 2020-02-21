<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="10" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="12" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focusInput" @blur="blurInput" @input="getSearchList"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd></dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <router-link v-for="(item,index) in searchList" :key="item + '~' + index" :to="{name:'goods', params: {name: item}}"><dd> {{ item }}</dd></router-link>
                    </dl>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      searchList: []
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWord
    },
    isSearchList () {
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    focusInput () {
      this.isFocus = true
    },
    blurInput () {
      let self = this
      setTimeout(() => {
        self.isFocus = false
      }, 200)
    },
    getSearchList () {
      api.searchList().then(res => {
        let searchWord = this.searchWord;
        this.searchList = res.data.data.list.filter((item,index) => {
          return item.indexOf(searchWord) > -1;
        })
      })
    }
  }
}
</script>
