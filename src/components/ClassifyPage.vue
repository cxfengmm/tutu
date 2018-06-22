<template>
  <div class="wrap">
    <div class="backBar">
      <span class="back fl" @click="back"></span>
      <span>{{categoryName}}</span>
      <span>{{classfyID}}</span>
    </div>

    <div class="chooseArea">
      <span class="fl">综合</span>
      <span class="fl">销量</span>
      <span class="fl price">价格 <img src="../assets/img/booktype/sort-no.png" alt=""></span>
      <span class="fl select">筛选 <img src="../assets/img/booktype/arrow-down.png" alt=""></span>
    </div>

    <div class="listArea">
      <!--<router-link to="#" class="list" v-for="item in list">
        <dl>
          &lt;!&ndash;<dt><img :src="item.book_cover" alt=""></dt>
          <dd class="describe">{{item.group_describe}}</dd>
          <dd>
            <span class="price">￥</span><span class="price num">{{item.one_price}}</span>
            <span class="total">
              <span>已抢</span><span>{{item.group_num}}</span><span>本</span>
            </span>
          </dd>&ndash;&gt;
        </dl>
      </router-link>-->
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store'

  export default {
    name:'classifyPage',
    data:function () {
      return {
        categoryName:'',
        classfyID:''
//        list:[]
      }
    },
    methods:{
      getList:function () {
        var that = this;
        this.axios({
          method:'post',
          url:'api/categoryList',
          data:{
            price:1,
            avg:1,
            salesVolume:1,
            screen:`{"words":null,"status":null,"group":null}`,
            pid:that.classfyID,
            p:1
          }
        }).then(function (response) {
          console.log(response)
        })
      },
      back:function () {
        this.$router.go(-1)
      },
      upData:function () {
        this.categoryName = this.$route.query.categoryName;
        this.classfyID = this.$route.query.classfyID;
        /*console.log(ID)
        store.commit('upData',{categoryName:name,classfyID:ID});*/
      }
    },
    created:function () {
      this.upData();
      this.getList();
    },
    /*computed:{
      categoryName:function () {
        return store.state.categoryName
      },
      classfyID:function () {
        return store.state.classfyID
      }
    },*/
    watch:{
      $route:function () {
        this.upData();
        this.getList();
      }
    }
  }
</script>

<style scoped>
  .wrap{
    width:100%;
    height:100vh;
    background: #fff;
  }
  .backBar{
    width:100%;
    height:0.48rem;
    background: #f8f8f8;
    padding:0.15rem 0.2rem;
  }
  .back{
    width:0.18rem;
    height:0.18rem;
    background: url("../assets/img/back.png");
    background-size: 100% 100%;
    margin-right:0.15rem;
  }
  .chooseArea{
    width:100%;
    height:0.42rem;
    border-bottom:0.01rem solid #f2f2f2;
  }
  .chooseArea span{
    width:25%;
    height:0.42rem;
    font:0.14rem/0.42rem "";
    text-align: center;
  }
  .chooseArea .price img{
    width:0.07rem;
    height:0.11rem;
    margin-top: 0.17rem;
  }
  .chooseArea .select img{
    width:0.12rem;
    height:0.07rem;
    margin-top:0.19rem;
  }
  .listArea{
    width:100%;
    overflow: auto;
    background: #f2f2f2;
  }
  .listArea .list{
    width:1.99rem;
    height:2.62rem;
    margin-bottom:0.04rem;
    background: #fff;
  }
  .listArea .list:nth-of-type(2n){
    float: right;
  }
  .listArea .list:nth-of-type(2n+1){
    float: left;
  }
  .list dt{
    position: relative;
    width:1.99rem;
    height:1.96rem;
  }
  .list dt img{
    width:1.1rem;
    height:1.55rem;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin: auto auto;
  }
  .list dd{
    padding:0 0.1rem;
  }
  .list .describe{
    height:0.34rem;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    font:0.12rem/0.18rem "";
  }
  .listArea .price{
    color: #df2f25;
    font:0.12rem/0.32rem "";
  }
  .listArea .num{
    font-weight:bold;
  }
  .listArea .total{
    float: right;
    color: #a9a9a9;
    font:0.12rem/0.34rem "";
    margin-left: 0.14rem;
  }
</style>
