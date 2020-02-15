<template>
  <div class="choose-wrap">
    <div class="choose" @click="inpClick" v-document-click="documentClick">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showChooseContent}">
        <p>{{ title }}</p>
        <div class="wrapper">
          <div class="col">
            <span
              class="mt-item"
              v-for="(item,index) in provinceList"
              :key="index"
               @click="choosen(item)"
            >{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderList: []
    };
  },
  props: ["value", "title", "provinceList", "showChooseContent"],
  methods: {
    inpClick(e) {
      e.stopPropagation();
      this.$emit("change_select", true);
    },
    documentClick() {
      this.$emit("change_select", false);
    },
    choosen (item) {
      this.$emit("change",item)
    }
  }
};
</script>
