<template>
  <div>
    <div class="shop-info">
      <ul class="comments-wrap">
        <li v-for="(c, i) in evaluation" :key="i" class="item">
          <div class="big">
            <div class="comment-user">
              <img :src="c.avatar" />
            </div>
            <div class="conment-info">
              <div class="name">
                <h4>{{ c.username }}</h4>
              </div>
            </div>
            <div class="comment-text">
              {{ c.text }}
            </div>
          </div>
          <span class="food" v-for="(f,i) in c.recommend" :key="i">{{f+','}}</span>
          <div class="time"><small>{{ time(c.rateTime) }}</small></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data() {
    return {
      evaluation: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    time(time) {
      let date = new Date(time);
      let Y = date.getFullYear() + "年";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "月";
      let D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "日 ";
      let h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      let m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
    getData() {
      this.$axios("/more.json").then((res) => {
        console.log(res.data.ratings);
        this.evaluation = res.data.ratings;
      });
    },
  },
};
</script>

<style scoped>
.food{
    font-size: 0.8rem;
    color: green;
    margin: 2vw 0 1vw;
    display: inline-block;
}
.item{
    margin: 3vw;
    background-color: #fff;
    padding: 3vw;
    border-radius: 15px;
}
.big{
    display: flex;
}
.comment-user {
    width: 30px;
    height: 30px;
}
.comment-user img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.name{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.name h4{
    padding-top: 8px;
    margin-top: 0;
    color: rgb(211, 70, 70);
    margin-right: 1.6vw;
}
.time small{
    font-size: 0.7rem;
    color: #999;
}
.comment-text{
    padding-left: 8px;
}
</style>
