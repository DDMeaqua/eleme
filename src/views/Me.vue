<template>
    <div class="me">
        我的
        <br>
        <input type="text" v-model="a">
        <span>{{a}}</span>
    </div>
</template>

<script>
    export default {
        name:"me",
        data() {
            return {
                a: '111'
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>