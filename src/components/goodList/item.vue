<template>
  <div>
    <dl class="s-item">
      <dt>
        <img :src="item_list.image" alt />
      </dt>
      <dd>
        <h3>
          <router-link :to="{name:'productDeatil'}">{{ item_list.title }}</router-link>
        </h3>
        <p>
          <el-rate v-model="item_list.score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
          <span v-if="item_list.score > 4.5">很好</span>
          <span v-else-if="item_list.score > 3.5">不错</span>
          <span v-else-if="item_list.score > 3">一般</span>
          <span v-else>不行</span>
          <span>{{ item_list.score }}分</span>
          <span class="s-item-comment-total">{{ item_list.commentNum }}人评论</span>
        </p>
        <p class="s-item-p">
          <span class="s-item-tab">
            <span
              v-for="(item,index) in item_list.tab"
              :key="index+'tab'"
            >
            {{ item + ( index < (item_list.tab.length-1) ? '|' : '') }}
            </span>
          </span>
          <span class="s-item-addr">{{ item_list.address }}</span>
          <span>
            <a href="#">
              <i class="el-icon-location"></i>
              查看地图
            </a>
          </span>
        </p>
        <ul v-if="item_list.deal_items.length>0" class="deal-items">
          <li class="items" v-for="(item,index) in item_list.deal_items.slice(0,2)" :key="index">
            <p class="deal-title">{{ item.title }}</p>
            <span class="deal-price">¥{{ item.price }}</span>
            <span class="deal-old-price">门市价¥{{ item.counter_price }}</span>
            <span class="deal-sales">已售{{ item.saleNum }}</span>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["item_list"]
};
</script>