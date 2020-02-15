<template>
    <div class="m-hcity">
        <dl>
            <dt>{{ title }}</dt>
            <dd v-for="(item,index) in cityList" :key="index">{{ item }}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:["title","cityList"]
}
</script>