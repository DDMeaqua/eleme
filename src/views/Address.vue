<template>
    <div class="address">
        <Header :isLeft="true" title="选择收货地址"></Header>
        <div class="citi_search">
            <div class="search">
                <span class="city">
                    {{city}}
                    <i class="fa fa-angle-down"></i>
                </span>
                <i class="fa fa-search"></i>
                <input type="text" v-model="search_val">
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
    export default {
        name:"Address",
        data() {
            return {
                city: "武汉",
                search_val:""
            }
        },
        components: {
            Header,
        },
        
    }
</script>

<style scoped>
.address{
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding-top: 45px;
}
.search{
    background-color: #eee;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    line-height: 40px 
}
.search .city{
    padding: 0 10px;
}
.city i{
    margin-right: 10px;
}
.search input{
    margin-left: 5px;
    background-color: #eee;
    outline: none;
    border: none;
}
</style>