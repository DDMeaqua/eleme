<template>
  <div class="home">
    <div class="head">
      <div
        class="address_map"
        @click="$router.push({ name: 'address', params: { city: city } })"
      >
        <i class="fa fa-map-marker"></i>
        <span>{{ address }}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>
    <div class="search_wrap">
      <div class="shop_search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
    <div class="container" style="height: 2000px">
      <!-- 轮播 -->
      <mt-swipe :auto="3000" class="swiper">
        <mt-swipe-item><img src="../../public/img/lunbo1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../public/img/lunbo4.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../public/img/lunbo5.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../public/img/lunbo_22.webp" alt=""></mt-swipe-item>
      </mt-swipe>

      <!-- 分类 -->
      <div class="fenlei">
        <div class="fz" v-for="(item,index) in fl" :key="index">
          <div><img :src='`../img/${item.img}`'></div>
          <span>{{item.title}}</span>
        </div>
      </div>

      <!-- 首页的商家 -->
      <div class="shop">
        <div class="restaurant" v-for="(item,index) in shop" :key="index">
          <span>{{item.fields.restaurant.name}}</span>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "home",
  data() {
    return {
      sname:[],
      shop:[],
      swipeImgs: "",
      test: "",
      fl:[
        {id:1,img:"001.png",title:"美食"},
        {id:2,img:"002.png",title:"超市便利"},
        {id:3,img:"003.png",title:"甜点饮品"},
        {id:4,img:"004.png",title:"生鲜果蔬"},
        {id:5,img:"005.png",title:"鲜花蛋糕"},
        {id:6,img:"006.png",title:"下午茶"},
        {id:7,img:"007.png",title:"美团专送"},
        {id:8,img:"008.png",title:"快餐"},
        {id:9,img:"009.png",title:"汉堡披萨"},
        {id:10,img:"010.png",title:"异国料理"},
      ],
    };
  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/shop.json").then((res) => {
        // console.log(res.data.data.data.frontend_page_shop_list_recommend.fields.items);
        let base = res.data.data.data.frontend_page_shop_list_recommend.fields.items
        this.shop = base
        console.log(this.shop);
        let ts = ''
        let tbox = []
        for (let i = 0; i < this.shop.length; i++) {
          ts = 'name:' + this.shop[i].fields.restaurant.name + ',' + 'snum' + this.shop[i].fields.restaurant.recentOrderNumDisplay
          tbox.push(ts)
        }
        console.log(tbox);
      });
    },


  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  /* overflow: auto; */
  box-sizing: border-box;
}
.head,
.search_wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.head .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}
.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
.swiper{
  height: 120px;
}
.swiper img{
  height: 120px;
  width: 100%;
}
.fenlei{
  padding: 3px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.fenlei .fz{
  outline: none;
  box-sizing: border-box;
  overflow: hidden;
  width: 70px;
  height: 70px;
}
.fz img{
    width: 44px;
    height: 44px;
}
.fz span{
  font-size: 14px;
  
}
</style>
