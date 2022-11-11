<template>
  <div v-if="info">
    <h4>电话:{{info.phone}}</h4>
    <div class="txt">{{info.bulletin}}</div>
    <h4>店面展示:</h4>
    <div class="img">
      <img :src="info.pics[0]" alt="">
      <img :src="info.pics[2]" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Seller",
  data() {
    return {
      info: null
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/more.json").then((res) => {
        this.info = res.data.info
        console.log(this.info);
      });
    },
  },
};
</script>

<style scoped>
h4{
  font-size: 1.5rem;
  color: white;
  background-color: rgba(247, 17, 32, 0.74);
  padding: 4vw 2vw;
}
.img img{
  width: 100%;
}
.txt{
  color: white;
  background-color: rgba(247, 17, 32, 0.74);
  font-size: 1rem;
  padding: 4px;
  line-height: 24px;
}
</style>
