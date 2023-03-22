<template>
  <transition name="move">
    <div v-if="isShow" class="food">
      <div class="food-close" @click="$emit('close')">
        <img
          src="https://fuss10.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?imageMogr/format/webp/"
        />
      </div>
      <div class="food-foodinfo">
        <div class="food-img">
          <img :src="food.image" alt="" />
        </div>
        <div class="foodinfo">
          <h4>{{ food.name }}</h4>
          <div class="food-sales">
            <span>月售：{{ food.sellCount }}</span>
            <span>好评率：{{ food.rating }}%</span>
          </div>
          <div class="food-priceLine">
            <span>￥{{ food.price }}</span>
            <CartControll class="cart-btn" :food="food"></CartControll>
          </div>
          <p>{{ food.description }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CartControll from "../components/CartControll.vue";
export default {
  name: "Food",
  props: {
    food: Object,
    isShow: Boolean,
  },
  components: {
    CartControll,
  },
};
</script>

<style scoped>
.food {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
}
.food-close {
  width: 7.46667vw;
  height: 7.46667vw;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 2.13333vw;
  right: 4vw;
}
.food-close img {
  width: 5.3333vw;
  height: 5.3333vw;
}
.food-foodinfo {
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 20vw;
  box-sizing: border-box;
  overflow-x: hidden;
}
.food-img {
  width: 100%;
  display: block;
}
.food-img img {
  width: 100%;
}
.foodinfo {
  padding: 4vw 4vw 0;
  width: 100%;
  min-height: 30vw;
}
.foodinfo h4 {
  display: flex;
  align-items: center;
  margin-bottom: 2.8vw;
  font-size: 1.4rem;
  font-weight: 700;
  width: 74.6666vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.food-sales {
  font-size: 0.9rem;
  color: #666;
  line-height: 1;
  margin-bottom: 2.8vw;
}
.food-priceLine {
  display: flex;
  align-items: center;
  margin-bottom: 2.8vw;
  position: relative;
}
.food-priceLine > span {
  font-size: 1.2rem;
  line-height: 4.3vw;
  color: #ff5339;
  padding-bottom: 0.93333vw;
  display: flex;
  align-items: baseline;
}
.food-priceLine .cart-btn {
  position: absolute;
  right: 8vw;
}
.foodinfo > p {
  font-size: 1rem;
  color: #666;
  line-height: 8vw;
  padding-right: 8vw;
}

.move-enter,
.move-leave-to{
    transform: translate(0,500px);
}
</style>
