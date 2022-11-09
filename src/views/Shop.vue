<template>
  <div class="shop" v-if="shopInfo">
    <!-- 头 -->
    <nav class="header-nav">
      <div class="nav_bg">
        <img :src="shopInfo.info.bgImg" />
      </div>
      <div class="nav_back">
        <i @click="$router.push('/home')" class="fa fa-chevron-left"></i>
      </div>
      <div class="shop_image">
        <img :src="shopInfo.info.avatar" />
      </div>
    </nav>

    <!-- 商家信息 -->
    <div class="index-rst">
      <div class="rst-name">
        <span @click="showInfoModel = true">{{ shopInfo.info.name }}</span>
        <i class="fa fa-caret-right"></i>
      </div>
      <!-- 弹窗信息 -->
      <Infomodel
        @close="showInfoModel = false"
        :info="shopInfo.info"
        :showInfoModel="showInfoModel"
      ></Infomodel>

      <!-- 评分月售 -->
      <div class="rst-order">
        <span>{{ shopInfo.info.foodScore }}</span>
        <span>月售2000+</span>
        <span>{{ shopInfo.info.deliveryTime }}分钟</span>
      </div>
      <!-- 公告 -->
      <p class="rst-promotion">
        品牌至今，积极创新，贴近百姓生活，服务千家万户
      </p>
    </div>

    <!-- 导航 -->
    <NavBar></NavBar>
    <router-view></router-view>

  </div>
</template>

<script>
import Infomodel from "../components/Infomodel.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "shop",
  data() {
    return {
      shopInfo: null,
      showInfoModel: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/more.json").then((res) => {
        this.shopInfo = res.data;
        // console.log(this.shopInfo);
      });
    },
  },
  components: {
    Infomodel,
    NavBar,
  },
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  box-sizing: border-box;
}
.header-nav {
  position: relative;
}
.nav_bg img {
  width: 100%;
  height: 26.66667vw;
}
.nav_back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 26.66667vw;
  background-color: rgba(0, 0, 0, 0.5);
}
.nav_back i {
  color: #fff;
  font-size: 1.3rem;
  margin-left: 1.3333vw;
  margin-top: 1.3333vw;
}
.shop_image {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -10vw;
  margin-top: 13vw;
}
.shop_image img {
  width: 20vw;
  height: 20vw;
  border-radius: 0.8vw;
}
.index-rst {
  padding: 5vw 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: inset 0 -0.66667vw 0.66667vw hsla;
}
.index-rst .rst-name {
  flex: 1;
  width: 72vw;
  font-size: 1.2rem;
  font-weight: 700;
  white-space: nowrap;
  padding-right: 2.66667vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.6vw 0;
}
.rst-name span {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.index-rst .rst-order {
  white-space: nowrap;
  height: 3.2vw;
  margin-top: 1.73333vw;
  color: #666;
  text-align: center;
  font-size: 0.6rem;
}
.rst-order span {
  margin: 0 3px;
}
.index-rst .rst-promotion {
  width: 80vw;
  font-size: 0.6rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2.266667vw auto;
  padding: 0;
  white-space: nowrap;
}
</style>
