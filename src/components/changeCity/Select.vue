<template>
  <div class="choose-wrap">
    <div
      :class="['choose',disabled?'disabled':'']"
      @click="inpClick"
      v-document-click="documentClick"
    >
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showChooseContent}">
        <p>{{ title }}</p>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(listCol,index) in renderList" :key="index+'v'">
            <span
              class="mt-item"
              v-for="(item,index) in listCol"
              :key="index"
              @click="choosen(item)"
            >{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value", "title", "disabled", "className", "provinceList", "showChooseContent"],
  computed: {
    renderList: function() {
      let col = Math.ceil(this.provinceList.length / 12);
      let renderList = [];
      for (let i = 0; i < col; i++) {
        let data = this.provinceList.slice(i * 12, i * 12 + 12);
        renderList.push(data);
      }
      return renderList;
    }
  },
  methods: {
    inpClick(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("change_select", true);
      }
    },
    documentClick() {
      this.$emit("change_select", false);
    },
    choosen(item) {
      this.$emit("change", item);
    }
  }
};
</script>
