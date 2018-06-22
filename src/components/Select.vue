<template>
  <div class="wrap">
    <Banner :results="bannerImg"></Banner>

    <div class="topArea">
      <div class="left fl">
        <router-link to="#">
          <dl v-if="topData.left">
            <dd class="name">{{topData.left.name}}</dd>
            <dd class="recommend">{{topData.left.alias}}</dd>
            <dt><img :src="topData.left.url" alt=""></dt>
          </dl>
        </router-link>
      </div>
      <div class="right fl">
        <router-link to="#">
          <dl v-if="topData.right">
            <dd class="name">{{topData.right.name}}</dd>
            <dd class="recommend">{{topData.right.alias}}</dd>
            <dt><img :src="topData.right.url" alt=""></dt>
          </dl>
        </router-link>
        <router-link to="#">
          <dl v-if="topData.bottom">
            <dd class="name">{{topData.bottom.name}}</dd>
            <dd class="recommend">{{topData.bottom.alias}}</dd>
            <dt><img :src="topData.bottom.url" alt=""></dt>
          </dl>
        </router-link>
      </div>
    </div>

    <div class="bottomArea">
      <router-link to="#">
        <dl v-for="item in bottomData">
          <dt>
            <img :src="item.url[0]" alt="">
            <span>{{item.main_recommend}}</span>
          </dt>
          <dd class="basicInfo">
            <span class="tag fl" :style="{background:item.tag_color}">{{item.tag}}</span>
            <span class="fl name">{{item.name}}</span>
            <span class="fr">{{item.ticket_num}} 在读</span>
          </dd>
          <dd class="summary">{{item.summary}}</dd>
        </dl>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  export default {
    name:'Select',
    components:{Banner},
    data:function () {
      return {
        bannerImg:[],
        topData:{},
        bottomData:{}
      }
    },
    created:function () {
      this.getBanner();
      this.getList();
    },
    methods:{
      getBanner:function () {
        var that = this;
        this.axios({
          method: 'get',
          url:'api/banner/type/2'
        }).then(function (response) {
          that.bannerImg = response.data.data;
        })
      },
      getList:function () {
        var that = this;
        this.axios({
          method:'get',
          url:'api/selectedList'
        }).then(function (response) {
          that.topData = response.data.data.top;
          that.bottomData = response.data.data.list;
        }).catch(function () {

        })
      }
    }
  }
</script>

<style scoped>
  .wrap{
    width: 100%;
  }
  .topArea{
    width:100%;
    padding:0.16rem 0;
    border-bottom: 0.08rem solid #f3f2f3;
    height:3.65rem;
  }
  .topArea .left{
    padding:0 0.15rem;
    margin-right:0.12rem;
  }
  .topArea .right{
    padding:0 0.15rem;
  }
  .topArea .name{
    font: 0.18rem/0.4rem "";
  }
  .topArea .recommend{
    font-size:0.14rem;
    color: #999999;
  }
  .topArea .left img{
    display: block;
    width:1.46rem;
    height:2rem;
    margin-top: 0.34rem;
  }
  .topArea .right img{
    display: block;
    width:1.74rem;
    height:0.9rem;
    margin-top:0.12rem;
  }
  .bottomArea{
    width:100%;
    padding:0 0.16rem;
  }
  .bottomArea dl{
    padding: 0.16rem 0;
    border-bottom:0.01rem solid #f3f2f3;
  }
  .bottomArea dt{
    width:100%;
    height:1.48rem;
    margin-bottom:0.08rem;
    position: relative;
  }
  .bottomArea dt img{
    display: block;
    width:100%;
    height:1.48rem;
  }
  .bottomArea dt span{
    position: absolute;
    left:0.16rem;
    bottom:0.1rem;
    font-size:0.16rem;
    color: #fff;
  }
  .bottomArea .basicInfo{
    width:100%;
    height:0.2rem;
    font:0.12rem/0.2rem "";
    text-align: center;
    color: #5d5d5d;
    margin-bottom:0.1rem;
  }
  .basicInfo .tag{
    width:0.32rem;
    height:0.2rem;
    border-radius:0.04rem;
    color: #fff;
    margin-right:0.06rem;
  }
  .bottomArea .summary{
    font:0.12rem/0.2rem "";
  }



</style>
