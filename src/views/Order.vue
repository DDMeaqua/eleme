<template>
    <div class="order">
        <h1>我的订单：</h1>
        <ul>
            <li>
                <h4>嘉禾一品（杨家湾店）</h4>
                <span class="tim">已送达</span>
                <span class="dao">共消费:￥20</span>
            </li>

            <li>
                <h4>嘉禾一品（杨家湾店）</h4>
                <span class="tim">已送达</span>
                <span class="dao">共消费:￥20</span>
            </li>

            <li>
                <h4>嘉禾一品（杨家湾店）</h4>
                <span class="tim">已送达</span>
                <span class="dao">共消费:￥20</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"order",
        
    }
</script>

<style scoped>
h1{
    background-color: #fff;
    font-size: 1.8rem;
    padding-left: 18px;
    padding-top: 16px;
}
ul{
    background-color: #fff;
    padding: 10px 20px;
}
li{
    margin: 10px 0;
    padding: 12px;
    border: 2px solid rgb(0,158,239);
    border-radius: 16px;
}
li h4{
    font-size: 1.4rem;
    margin-top: 4px;
    margin-bottom: 20px;
}
li .tim{
    color: #999;
    font-size: 1rem;
}
li .dao{
    font-size: 1rem;
    margin-left: 160px;
}
</style>