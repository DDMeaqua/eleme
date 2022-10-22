<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="city_val" type="text" placeholder="输入城市名" />
      </div>
      <button @click="$router.push({name:'address',params:{city:city} })">取消</button>
    </div>
    <div v-if="searchList.length == 0" style="height:100%">
      <div class="location">
        <Location @click="selectCity(city)" :address="city" ></Location>
      </div>
      <Cities @selectCity="selectCity" :allcity="allcity"></Cities>
    </div>
    <div class="search_list" v-else>
      <ul>
        <li @click="selectCity(item)" v-for="(item,index) in searchList" :key="index">{{item}}</li>
      </ul>
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
      cityInfo: null,
      keys: [],
      allcity:[],
      searchList:[]
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
  watch: {
    city_val() {
      console.log(this.city_val);
      this.searchCity()
    }
  },
  methods: {
    getCityInfo() {
      this.$axios(
        "https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json"
      ).then((res) => {
        // console.log(res.data);
        for (let i = 0; i < res.data.cityList.length; i++) {
          for (let j = 0; j < res.data.cityList[i].cities.length; j++) {
            this.allcity.push(res.data.cityList[i].cities[j].name)
          }
        }
        // console.log(this.allcity);
      });
    },

    selectCity(city){
      // console.log(city);
      this.$router.push({name:"address",params:{city:city}})
      console.log(city);
    },

    searchCity(){
      if(!this.city_val){
        // 判断输入框是否为空
        this.searchList = []
      }else{
        // 根据输入框关键字检索城市 存入到searchList数组中
        this.searchList = this.allcity.filter(item =>{
          return item.indexOf(this.city_val) != -1;
        })
        console.log(this.searchList);
      }
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

.search_list {
  background-color: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

</style>
