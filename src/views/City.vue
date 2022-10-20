<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="city_val" type="text" placeholder="输入城市名" />
      </div>
      <button @click="$router.go(-1)">取消</button>
    </div>
    <div>
      <div class="location">
        <Location :address="city"></Location>
      </div>
      <Cities :allcity="allcity"></Cities>
    </div>
  </div>
</template>

<script>
import Location from "../components/Location.vue";
import Cities from "../components/Cities.vue";
export default {
  name: "City",
  data() {
    return {
      city_val: "",
      cityInfo: "",
      keys: [],
      allcity:[]
    };
  },
  components: {
    Location,Cities,
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    },
  },
  created() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      this.$axios(
        "https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json"
      ).then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.cityList.length; i++) {
          for (let j = 0; j < res.data.cityList[i].cities.length; j++) {
            this.allcity.push(res.data.cityList[i].cities[j].name)
          }
        }
        console.log(this.allcity);
      });
    },
  },
};
</script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search_wrap .search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  outline: none;
  border: none;
  margin-left: 5px;
  background-color: #eee;
}
.search_wrap button {
  outline: none;
  color: #009eef;
  background-color: white;
  border: none;
}
.location {
  background-color: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}
</style>
