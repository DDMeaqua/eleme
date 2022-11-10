<template>
    <div class="shopcart">
        <transition name="fade">
        <div class="cartview" @click.self="showCartvie = false" v-if="showCartview && !isEmpty">
            <div class="cartview-cartbody">
                <div class="cartview-header">
                    <span>已选商品</span>
                    <button @click="clearFood">
                        <i class="fa fa-trash-0"></i>
                        <span>清空</span>
                    </button>
                </div>
                <div class="list">
                    <ul class="cartlist">
                        <li class="cartlist-item" v-for="(food,i) in selectFood" :key="i">
                            <h4><span>{{food.name}}</span></h4>
                            <span class="List-total">{{food.price * food.count}}</span>
                            <CartControll :food="food"></CartControll>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </transition>

        <div class="bottomNav" :class="{'bottom-icon-empty':isEmpty}">
            <span class="bottom-icon" @click="showCartview = !showCartview">
                <i class="fa fa-cart-plus"></i>
                <span v-if="totalCount">{{totalCount}}</span>
            </span>
            <div class="bottom-info" @click="showCartview = !showCartview">
                <p class="bottom-total">
                    <span v-if="isEmpty">未选购商品</span>
                    <span v-else>￥{{totalPrice}}</span>
                </p>
                <p class="bottom-livery">另需配送费￥2</p>
            </div>
            <button class="submit-btn">
                <span v-if="isEmpty">10元起送</span>
                <span v-else>去结算</span>
            </button>
        </div>

    </div>
</template>

<script>
import CartControll from '../components/CartControll'
    export default {
        name:"ShopCart",
        data() {
            return {
                totalCount: 0,
                totalPrice:0,
                selectFood:[],
                showCartview:false
            }
        },
        props:{
            shopInfo:Array
        },
        computed:{
            isEmpty(){
                let empty = true
                this.totalCount = 0
                this.totalPrice = 0
                this.selectFood = []
                this.shopInfo.forEach(item =>{
                    item.foods.forEach(food => {
                        if(food.count){
                            empty = false
                            this.totalCount += food.count
                            this.totalPrice += food.price * food.count
                            this.selectFood.push(food)
                        }
                    })
                })

                return empty
            },
        },
        methods: {
            clearFood() {
                this.shopInfo.forEach(item=>{
                    item.foods.forEach(food=>{
                        food.count = 0
                    })
                })
            }
        },
        created(){
            console.log(this.shopInfo);
        },
        components:{
            CartControll
        }
    }
</script>

<style scoped>
.bottomNav{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding-left: 21.06666vw;
    height: 12.8vw;
    z-index: 1000;
    background-color: rgba(61, 61, 61, 0.9)
}

.bottom-icon{
    position: absolute;
    left: 3.2vw;
    bottom: 2vw;
    width: 13.33333vw;
    height: 13.33333vw;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #3190e8;
    border: 1.333vw solid #444;
    box-shadow: 0 -0.8vw 0.5333vw 0 rgba(0, 0, 0, 0.1);
}
.bottom-icon > i{
    position: absolute;
    top: 7px;
    right: 0;
    bottom: 0;
    left: 7px;
    color: #fff;
    font-size: 1.6rem;
}
.bottom-info{
    flex: 1;
}
.bottom-total{
    font-size: 0.8rem;
    line-height: normal;
    color: #fff;
}
.bottom-livery{
    color: #999;
    font-size: 0.6rem;
}
.submit-btn{
    height: 100%;
    width: 28vw;
    background-color: #38ca73;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 12.8vw;
    border: none;
    outline: none;
}

.bottom-icon-empty>span{
    background-image: radial-gradient(circle,#363636 0.26666vw,#444 0);
}
.bottom-icon-empty>span>i{
    color: #606065 !important;
}
.bottom-icon-empty .bottom-total>span{
    color: #999;
}
.bottom-icon-empty .submit-btn{
    background-color: #535356 !important;
}

.bottom-icon > span{
    position: absolute;
    right: -1.2vw;
    top: -1.33333vw;
    line-height: 1;
    background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
    color: #fff;
    border-radius: 3.2vw;
    padding: 0.83333vw 1.33333vw;
    font-size: 0.6rem;
}


.cartview{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 200;
}
.cartview-cartbody{
    position: fixed;
    left: 0;
    width: 100%;
    background-color: #fff;
    bottom: 12.8vw;
    z-index: 201;
    opacity: 1;
    font-size: 1rem;
}
.cartview-header{
    display: flex;
    align-items: center;
    padding: 0 4vw;
    border-bottom: 0.133333vw solid #ddd;
    background-color: #eceff1;
    color: #666;
    height: 10.66666vw;
}
.cartview-header>span{
    flex: 1;
    display: flex;
    align-items: center;
}
.cartview-header>button{
    border: none;
    outline: none;
    flex: none;
    display: flex;
    align-items: center;
    padding-left: 4vw;
    color: #666;
    text-decoration: none;
    font-size: 0.8rem;
    line-height: 4vw;
    background: none;
}
.cartview-header>button>span{
    margin-left: 0.8vw;
}
.cartlist{
    overflow: auto;
    max-height: 80vw;
}
.cartlist-item{
    border-bottom: 0.133333vw solid #eee;
    display: flex;
    align-items: center;
    padding: 2vw 3.33333vw 2vw 0;
    min-height: 12.66666vw;
    margin-left: 3.33333vw;
}
.cartlist-item>h4{
    flex: 5.5;
    line-height: normal;
}
.cartlist-item>h4>span{
    display: inline-block;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    max-width: 46.666vw;
}
.List-total{
    color: rgb(255, 83, 57);
    flex: 2.5;
    text-align: left;
    white-space: nowrap;
    font-weight: 700;
}
.List-total::before{
    content: "\A5";
    font-size: 0.6rem;
    color: currentColor;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}
</style>