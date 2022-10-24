<template>
    <div class="search">
        <Header :isLeft="true" title="搜索"></Header>
        <div class="search_header">
            <form class="search_wrap">
                <i class="fa fa-search"></i>
                <input type="text" v-model="key_word" placeholder="请输入商家">
                <button>搜索</button>
            </form>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
    export default {
        name:'Search',
        data() {
            return {
                key_word: ""
            }
        },
        watch: {
            key_word() {
                this.keyWordChange()
            }
        },
        methods: {
            keyWordChange() {
                console.log(this.key_word);
            }
        },
        components:{
            Header
        }
    }
</script>

<style scoped>
.search{
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
}
.search_header{
    margin-top: 45px;
    background-color: #fff;
    padding: 0 4.26667vw;
}
.search_header .search_wrap{
    padding: 2.93333vw 2.93333vw 2.93333vw 0;
    display: flex;
    align-items: center;
    position: relative;
}
.search_wrap .fa-search{
    width: 2.9333vw;
    height: 2.9333vw;
    color: #888;
    position: absolute;
    top: 4.6666vw;
    left: 2.93333vw;
}
.search_wrap input{
    flex-grow: 1;
    border-radius: 0.266667vw;
    background-color: #f8f8f8;
    padding: 1.73333vw 4vw 1.733333vw 8.8vw;
    color: #666;
    outline: none;
    border: none;
}
.search_wrap button{
    outline: none;
    border: none;
    color: #333;
    font-size: 0.426667rem;
    background-color: #fff;
    font-weight: 700;
    margin-left: 2.9333vw;
    font-size: 14px;
}
</style>