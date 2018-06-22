<template>
  <div class="wrap">
    <Banner :results="bannerImg"></Banner>

    <div class="hotRead">
      <h4>热读标签</h4>
      <div class="tagArea">
        <router-link to="#" class="fl tag" :style="{borderColor:item.color==1?'#f0a5a5':'#a8a8a8'}" v-for="(item,index) in tag" :key="index">
          {{item.name}}
        </router-link>
      </div>
    </div>

    <div class="listArea">
      <router-link to="#" class="list" v-for="(item,index) in list" :key="index">
        <dl>
          <dt class="fl"><img :src="item.book_cover" alt=""></dt>
          <dd class="fl">
            <p class="bookName">{{item.book_name}}</p>
            <p class="author"><span>{{item.book_author}}</span> 著</p>
            <p class="price"><span>￥</span><span>{{item.group_price}}</span></p>
            <p class="group">去拼单 ></p>
          </dd>
        </dl>
        <p class="intro">{{item.book_intro}}</p>
      </router-link>
    </div>

    <div v-show="onOff" class="notice">
      {{message}}
    </div>
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  export default {
    name:'Short',
    components:{Banner},
    data:function () {
      return {
        bannerImg:[],
        tag:[],
        list:[],
        url:'api/shortArticle/tagid/3/p/',
        message:'',
        page:1,
        onOff:false
      }
    },
    created:function () {
      var that = this;
      this.getBanner();
      this.getTag();
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
      )
    },
    methods:{
      getBanner:function () {
        var that = this;
        this.axios({
          method: 'get',
          url:'api/banner/type/1'
        }).then(function (response) {
          that.bannerImg = response.data.data;
        })
      },
      getTag:function () {
        var that = this;
        this.axios({
          method:'get',
          url:'api/shortArticleTag'
        }).then(function (response) {
          console.log(response.data.data);
          that.tag = response.data.data;
        })
      },
      getList:function () {
        var that = this;
        this.axios({
          method:'get',
          url:that.url + that.p
        }).then(function (response) {
          console.log(response.data.data);
          that.list = response.data.data.list;
        })
      }
    }
  }
</script>

<style scoped>
  .wrap{
    width:100%;
  }
  .hotRead{
    padding:0.04rem 0.1rem 0;
    height:1.36rem;
  }
  .hotRead h4{
    font:bold 0.16rem/0.4rem "";
  }
  .hotRead .tagArea{
    width:100%;
    height:0.76rem;
  }
  .tagArea .tag{
    width:0.8rem;
    height:0.3rem;
    border:0.01rem solid #a8a8a8;
    border-radius:0.18rem;
    text-align: center;
    font:0.14rem/0.28rem "";
    color: #000;
    margin:0 0.18rem 0.16rem 0;
  }
  .tagArea .tag:nth-of-type(4n){
    margin-right:0;
  }
  .tagArea .tag.router-link-active{
    background: #f0a5a5;
    border-color: #f0a5a5!important;
    color: #fff;
  }
  .listArea{
    width:100%;
    background: #f2f2f2;
  }
  .listArea .list{
    display: block;
    width:100%;
    height:2.32rem;
    padding:0 0.32rem 0.1rem;
    margin-bottom:0.04rem;
    background: #fff;
  }
  .list dl{
    height:1.8rem;
  }
  .list dt{
    width:1.8rem;
    height:1.8rem;
    position: relative;
  }
  .list dt img{
    width:1rem;
    height:1.4rem;
    position: absolute;
    left:0;
    top:0;
    bottom: 0;
    right: 0;
    margin: auto auto;
  }
  .list dd{
    padding-top:0.17rem;
    width:1.55rem;
  }
  .bookName{
    font:0.16rem/0.4rem "";
    color: #333333;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .author{
    font-size:0.14rem;
    color: #8a8a8a;
    margin-bottom: 0.1rem;
  }
  .price{
    color: #df2f25;
    font:0.2rem/0.5rem "";
  }
  .group{
    width:0.92rem;
    height:0.3rem;
    background: #df2f25;
    color: #fff;
    border-radius:0.04rem;
    text-align: center;
    font:0.14rem/0.3rem "";
  }
  .intro{
    font:0.14rem/0.22rem "";
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .notice{
    width:100%;
    font:0.16rem/0.3rem "";
    text-align: center;
    border-top:0.04rem solid #f2f2f2;
  }
</style>
