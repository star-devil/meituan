<template>
    <div class="m-products-list">
        <ul>
            <li v-for="(item,index) in nav" :key="index" :class="{'s-nav-active': item.active}">{{ item.name }}</li>
        </ul>
        <el-row v-for="(item,index) in productList" :key="index">
            <m-item :item_list="item"/>
        </el-row>
    </div>
</template>

<script>
import MItem from '@/components/goodList/item'
export default {
    data() {
        return {
            nav: [
                {
                    key: "s-default",
                    name: "智能排序",
                    active: true
                },
                {
                    key: "s-price",
                    name: "价格排序",
                    active: false
                },
                {
                    key: "s-score",
                    name: "人气最高",
                    active: false
                },
                {
                    key: "s-comment",
                    name: "评价最高",
                    active: false
                },
            ],
            productList: [
                {
                    image: "//p1.meituan.net/msmerchant/b827e4cf0eb6ef5dea6a2570446ab35f1454347.jpg@275w_156h_1e_1c",
                    title: "重庆牧羊传奇火锅（崇明八一路店）",
                    type: "food",
                    score_comment: "不错",
                    score: 3.8,
                    commentNum: 1145,
                    tab: ["重庆火锅","南门"],
                    address: "崇明区城桥镇八一路206号067室（8壹广场对面，新老板娘大酒店隔壁）",
                    avg_price: 89,
                    deal_items: [],
                },
                {
                    image: "//p0.meituan.net/msmerchant/e3c09635a4464c0c033b7a73d1d68288139103.jpg@275w_156h_1e_1c",
                    title: "川源老火锅（浦仓路店）",
                    type: "food",
                    score_comment: "一般",
                    score: 3.4,
                    commentNum: 1582,
                    tab: ["重庆火锅","青浦城区"],
                    address: "青浦区浦仓路421弄10-14号",
                    avg_price: 72,
                    deal_items: [
                        {
                            title: "100元代金券1张，可叠加",
                            price: 88,
                            counter_price: 100,
                            saleNum: 2007
                        },
                        {
                            title: "双人套餐，提供免费WiFi",
                            price: 88,
                            counter_price: 118,
                            saleNum: 151
                        }
                    ]
                },
                {
                    image: "//p0.meituan.net/180.180/msmerchant/07b9b7146701598e4412646e40b9b738368933.jpg@275w_156h_1e_1c",
                    title: "蜀城巷子老成都火锅（控江店）",
                    type: "food",
                    score_comment: "不错",
                    score: 3.8,
                    commentNum: 248,
                    tab: ["四川火锅","控江地区"],
                    address: "杨浦区控江路1686号卫百辛大厦3层318室（新华医院对面）",
                    avg_price: 111,
                    deal_items: [
                        {
                            title: "4人特惠套餐，提供免费WiFi",
                            price: 258,
                            counter_price: 463,
                            saleNum: 508
                        },
                        {
                            title: "六人超值套餐，提供免费WiFi",
                            price: 358,
                            counter_price: 615,
                            saleNum: 216
                        }
                    ]
                }
            ]
        }
    },
    components: {
        MItem
    }
}
</script>