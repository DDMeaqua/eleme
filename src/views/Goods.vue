<template>
  <div class="goods" v-if="shopInfo">{{shopInfo}}</div>
</template>

<script>
export default {
  name: "Goods",
  data() {
    return {
        shopInfo: null
    }
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
};
</script>

<style scoped>
.goods{
    position: relative;
    height: calc(100% - 20vw);
}
</style>
