<template>
  <div class="wrap">
    <Banner :results="bannerImg"></Banner>

    <div class="classifyArea">
      <router-link :to="{path:'/classifyPage',query:{categoryName:item.category_name,classfyID:item.id}}" v-for="(item,index) in cate" :key="index" class="fl cate">
        <div :style="{backgroundImage:'url('+item.image+')',backgroundSize:'100% 100%'}">
          <p>
            <span>{{item.category_name}}</span>
          </p>
        </div>
      </router-link>

    </div>

    <div class="listArea">
      <router-link to="#" class="list" v-for="(item,index) in list" :key="index">
        <dl>
          <dt><img :src="item.book_cover" alt=""></dt>
          <dd class="describe">{{item.group_describe}}</dd>
          <dd>
            <span class="price">￥</span><span class="price num">{{item.one_price}}</span>
            <span class="total">
              <span>已抢</span><span>{{item.group_num}}</span><span>本</span>
            </span>
          </dd>
        </dl>
      </router-link>
    </div>

    <div v-show="onOff" class="notice">
      {{message}}
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store'
  import Banner from './Banner.vue'
  export default {
    name:'Female',
    components:{Banner},
    data:function () {
      return {
        bannerImg:[],
        cate:{},
        list:{},
        url:'api/frequencyDivision/type/1/',
        message:'',
        page:1,
        onOff:false
      }
    },
    methods:{
      getBanner:function () {
        var that = this;
        this.axios({
          method: 'get',
          url:'api/banner/type/5'
        }).then(function (response) {
          that.bannerImg = response.data.data;
        })
      },
      getList:function () {
        var that = this;
        this.axios({
          method: 'get',
          url:that.url + that.page
        }).then(function (response) {
          that.cate = response.data.data.cate;
          that.list = response.data.data.list;
        })
      }
    },
    created:function () {
      var that = this;
      this.getBanner();
      this.getList();
      this.scroll(
        function () {
          that.page++;
          that.axios({
            method:'get',
            url:that.url+ that.page
          }).then(function (response) {
            if(response.data.code==200){
              var list = response.data.data.list;
              list.forEach(function (item) {
                that.list.push(item);
              })
            }else{
              that.onOff = true;
              that.message = response.data.message;
              return;
            }
          })
        }
      );
    }
  }
</script>

<style scoped>
  .wrap{
    width:100%;
  }
  .classifyArea{
    width:100%;
    height:1.3rem;
    border:0.01rem solid #f7f7f7;
    padding:0.08rem 0.15rem;
  }
  .cate{
    width:1rem;
    height:0.48rem;
    border-radius:0.1rem;
    color: #fff;
    text-align: center;
    margin: 0 0.34rem 0.15rem 0;
  }
  .cate:nth-of-type(3n){
    margin-right: 0;
  }
  .cate div{
    width:100%;
    height:0.48rem;
    border-radius:0.1rem;
    position: relative;
  }
  .cate p{
    font:0.18rem/0.46rem "";
    position: absolute;
    width:1rem;
    height:0.48rem;
    border-radius:0.1rem;
    background: rgba(0,0,0,0.5);
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
  .price{
    color: #df2f25;
    font:0.12rem/0.32rem "";
  }
  .num{
    font-weight:bold;
  }
  .total{
    float: right;
    color: #a9a9a9;
    font:0.12rem/0.34rem "";
    margin-left: 0.14rem;
  }
  .notice{
    width:100%;
    font:0.16rem/0.3rem "";
    text-align: center;
  }
</style>
