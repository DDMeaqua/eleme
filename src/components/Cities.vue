<template>
    <div class="cities">
        <ul>
            <li @click="$emit('selectCity',item)" v-for="(item,index) in allcity" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"cities",
        props:{
            allcity:Array
        }
        
    }
</script>

<style scoped>
li{
    background-color: #fff;
    font-size: 14px;
    padding: 14px; 
    border-bottom: 1px solid #eee;
}

</style>