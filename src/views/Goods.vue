<template>
  <div class="goods" v-if="shopInfo">
    <!-- 商品分类 -->
    <div class="menuview">
      <!-- 左侧分类列表 -->
      <div class="menu-wrapper" ref="menuScroll">
        <ul>
          <li @click="selectMenu(i)" v-for="(s, i) in shopInfo" :key="i">
            <img :src="s.icon" v-if="s.icon" />
            <span>{{ s.name }}</span>
          </li>
        </ul>
      </div>
      <!-- 右侧 -->
      <div class="foods-wrapper" ref="foodScroll">
        <ul>
          <li class="food-list-hook" v-for="(g, i) in shopInfo" :key="i">
            <!-- 内容上 -->
            <div class="category-title">
              <strong>{{ g.name }}</strong>
            </div>
            <!-- 内容下 -->
            <div @click="handleFood(f)" class="fooddetails" v-for="(f, i) in g.foods" :key="i">
              <!-- 左 -->
              <img :src="f.icon" alt="" />
              <!-- 右 -->
              <section class="fooddetails-info">
                <h4>{{ f.name }}</h4>
                <p class="fooddetails-des">{{ f.info }}</p>
                <p class="fooddetails-sales">
                  月售：{{ f.sellCount }} 好评率：{{ f.rating }}%
                </p>
                <div class="fooddetails-price">
                  <span class="price">￥{{ f.price }}</span>
                  <CartControll :food="f"></CartControll>
                </div>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 购物车 -->
    <ShopCart :shopInfo="shopInfo"></ShopCart>

    <!-- 商品详情 -->
    <Food :food="selectedFood" :isShow="showFood" @close="showFood = false"></Food>

  </div>
</template>

<script>
import CartControll from "../components/CartControll.vue";
import BScroll from "better-scroll";
import ShopCart from "../components/ShopCart.vue";
import Food from "./Food.vue";
export default {
  name: "Goods",
  data() {
    return {
      shopInfo: null,
      menuScroll: {}, //左侧滚动对象
      foodScroll: {}, //右侧滚动对象
      selectedFood: null,  //食物详情
      showFood:false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/more.json").then((res) => {
        // console.log(res);
        res.data.goods.forEach((good) => {
          good.foods.forEach((food) => {
            food.count = 0;
          });
        });

        this.shopInfo = res.data.goods;
        // console.log(this.shopInfo);

        // DOM已更新
        this.$nextTick(() => {
          this.initScroll();
        });
      });
    },

    initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuScroll, {
        click: true,
      });

      this.foodScroll = new BScroll(this.$refs.foodScroll, {
        probeType: 3,
        click: true,
      });
    },
    
    selectMenu(i) {
      // console.log(i);
      let foodlist = this.$refs.foodScroll.getElementsByClassName("food-list-hook");
      let el = foodlist[i];
      console.log(el);
      // 滚动到对应元素的位置
      this.foodScroll.scrollToElement(el, 100);
    },

    // 商品详情
    handleFood(food){
      console.log(food);
      this.selectedFood = food
      this.showFood = true
    }
  },
  components: {
    CartControll,ShopCart,Food
  },
};
</script>

<style scoped>
.goods {
  position: relative;
}

.category-title {
  margin-left: 2.6666vw;
  padding: 2vw 8vw 2vw 0;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.category-title strong {
  margin-right: 1.3333vw;
  font-weight: 700;
  font-size: 0.8rem;
  color: #666;
  flex: none;
}
.menuview {
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 10.8vw;
  background-color: #fff;
  display: flex;
}
.menu-wrapper {
  overflow-y: hidden;
  height: calc(100% - 12.8vw);
  background-color: #f8f8f8;
  padding-bottom: 10.66667vw;
  width: 20.53333vw;
  /* position: sticky; */
}
.menu-wrapper li {
  padding: 4.666667vw 2vw;
  font-size: 0.6rem;
  color: #666;
  line-height: 1.2;
}
.menu-wrapper li img {
  max-width: 100%;
  width: 3.46667vw;
  height: 3.46667vw;
  vertical-align: top;
  margin-right: 0.8vw;
}

.foods-wrapper {
  overflow-y: hidden;
  height: calc(100% - 12.8vw);
  width: 79.46666vw;
  padding-bottom: 10.66667vw;
}
.fooddetails {
  min-height: 30.66666vw;
  padding: 2.66667vw 0 2.66667vw 2.66667vw;
  margin-bottom: 0.133333vw;
  display: flex;
}
.fooddetails img {
  width: 25.33333vw;
  height: 25.3333vw;
  flex: none;
  margin-right: 2.66666vw;
  border-radius: 0.533333vw;
}
.fooddetails-info {
  flex: 1;
  padding-bottom: 6.666667vw;
  padding-right: 4vw;
}
.fooddetails-info h4 {
  padding-right: 4vw;
  font-weight: 700;
  overflow: hidden;
  font-size: 1rem;
  white-space: nowrap;
  width: 40vw;
  text-overflow: ellipsis;
  color: #333;
}
.fooddetails-des {
  margin: 1.33333vw 0;
  font-size: 0.6rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 42.666667vw;
}
.fooddetails-sales {
  margin: 1.733333vw 0 !important;
  color: #999;
  font-size: 0.6rem;
  line-height: 1;
  min-height: 1em;
}
.fooddetails-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.733333vw;
}
.fooddetails-price .price {
  font-size: 1rem;
  line-height: 4.26666vw;
  color: #ff5339;
  padding-bottom: 0.93333vw;
  display: flex;
  align-items: baseline;
}
</style>
