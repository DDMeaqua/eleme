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

    <!-- 弹窗title -->
    <div class="index-rst">
      <div class="rst-name">
        <span @click="showInfoModel = true">{{ shopInfo.info.name }}</span>
        <i class="fa fa-caret-right"></i>
      </div>
      <Infomodel
        @close="showInfoModel = false"
        :info="shopInfo.info"
        :showInfoModel="showInfoModel"
      ></Infomodel>
    </div>
  </div>
</template>

<script>
import Infomodel from "../components/Infomodel.vue";
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
        console.log(this.shopInfo);
      });
    },
  },
  components: {
    Infomodel,
  },
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
</style>
