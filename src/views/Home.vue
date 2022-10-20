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
    <mt-swipe :auto="0">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
    </mt-swipe>

    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "home",
  data() {
    return {
      swipeImgs: "",
      test: "",
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
        console.log(
          res.data.data.data.frontend_page_shop_list_recommend.fields.items
        );
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
</style>
