<template>
    <div class="me">
        <div class="img">
            <img src="../../public/img/head.jpg">
            <h4>测试用户</h4>
        </div>
        <ul class="fa">
            <li>我的地址</li>
            <li>红包卡卷</li>
            <li>关注店铺</li>
        </ul>
        <div class="btn">
            <button  @click="$router.push('/login')">退出登录</button>
        </div> 
    </div>
</template>

<script>
    export default {
        name:"me",
        data() {
            return {
                
            }
        },
        
    }
</script>

<style scoped>
.me{
    background-color: #fff;
}
.img{
    background-color: rgb(0,158,239);
    height: 180px;
    position: relative;
}
.img img{
    border-radius: 50%;
    width: 80px;
    position: absolute;
    top: 30px;
    left: 144px;
}
.img h4{
    position: absolute;
    font-size: 1.6rem;
    color: white;
    bottom: 30px;
    left: 130px;
}
ul{
    text-align: center;
    width: 70%;
    padding: 20px 30px;
    background-color: #fff;

}
ul li{
    width: 100%;
    background-color: #fff;
    font-size: 1.2rem;
    margin: 40px 20px;
    border-bottom: 1.3px solid gray;
}
.btn{
    width: 100%;
    text-align: center;
}
button{
    width: 40%;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: rgba(223, 36, 36, 0.877);
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
}
</style>