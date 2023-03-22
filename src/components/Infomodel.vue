<template>
<transition name="fade">
  <div class="info-model" v-show="showInfoModel">
    <div class="brief-modal">
      <h2>
        <i>品牌</i>
        <span>{{ info.name }}</span>
      </h2>
      <ul>
        <li>
          <h3>{{ info.foodScore }}</h3>
          <span>评分</span>
        </li>
        <li>
          <h3>2000+</h3>
          <span>月售</span>
        </li>
        <li>
          <h3>{{ info.description }}</h3>
          <span>骑手</span>
        </li>
        <li>
          <h3>{{ info.deliveryTime }}分钟</h3>
          <span>时效</span>
        </li>
        <li>
          <h3>{{ info.distance }}</h3>
          <span>距离</span>
        </li>
      </ul>
      <h3 class="promotion">
        <span>公告</span>
      </h3>
      <p class="brief-modal-yx">{{ info.bulletin }}</p>
    </div>
    <!-- x -->
    <div class="brief-modal-close" @click="$emit('close')">
      <img
        src="https://fuss10.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?imageMogr/format/webp/"
      />
    </div>
    <!-- {{info.address}} -->
  </div>
  </transition>
</template>

<script>
export default {
  props: {
    info: Object,
    showInfoModel:Boolean
  },
};
</script>

<style scoped>
.info-model {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
.brief-modal {
  position: fixed;
  width: 80%;
  max-height: 85.33333vw;
  padding: 7.06666vw 6.66667vw 7.466667vw;
  border-radius: 1.06667vw;
  overflow: hidden;
  background-color: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.brief-modal h2 {
  font-size: 1.4rem;
  line-height: 6.6667vw;
  color: #333;
  text-align: center;
  font-weight: bolder;
}
.brief-modal h2 i {
  position: relative;
  top: -0.53333vw;
  margin-right: 1.6vw;
  border-radius: 0.266667vw;
  background-image: linear-gradient(90deg, #fff100, #ffe339);
  color: #6a3709;
  font-style: normal;
  padding: 0.8vw;
  font-weight: 700;
  font-size: 0.8rem;
}
.brief-modal ul {
  display: flex;
  margin: 5.066667vw -6.66667vw;
}
.brief-modal ul li {
  flex: 1;
  text-align: center;
}
.brief-modal ul li h3 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.6vw;
}
.brief-modal ul li p {
  font-size: 0.293333rem;
  color: #999;
}
.brief-modal .promotion {
  position: relative;
  text-align: center;
  margin: 4.8vw auto 2.66667vw;
  width: 20.26667vw;
  background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
  background-size: 100% 1px;
  background-position: 50%;
  background-repeat: no-repeat;
}
.brief-modal .promotion span {
  font-size: 0.8rem;
  padding: 0 1.06667vw;
  color: #999;
  background-color: #fff;
}
.brief-modal-yx {
  font-size: 0.8rem;
  line-height: 1.54;
  color: #333;
  max-height: 26.6667vw;
  overflow-y: auto;
}
.brief-modal-close {
  margin-top: 95vw;
  width: 10vw;
  height: 10vw;
}
.brief-modal-close img {
  width: 100%;
  height: 100%;
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
