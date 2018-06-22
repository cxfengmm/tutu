<template>
  <div class="wrap">
    <Banner :results="bannerImg"></Banner>

    <div class="funcArea">
      <div class="part fl">
        <router-link to="signIn">
          <dl>
            <dt><img src="../assets/img/person/sign.png" alt="" class="sign"></dt>
            <dd>红包签到</dd>
          </dl>
        </router-link>
      </div>
      <div class="part fl">
        <dl>
          <dt><img src="../assets/img/person/pack.png" alt=""></dt>
          <dd>分亿元红包</dd>
        </dl>
      </div>
      <div class="part fl">
        <dl>
          <dt><img src="../assets/img/person/free.png" alt=""></dt>
          <dd>砍价免费看</dd>
        </dl>
      </div>
      <div class="part fl">
        <dl>
          <dt><img src="../assets/img/person/you.png" alt=""></dt>
          <dd>优惠充值</dd>
        </dl>
      </div>
    </div>

    <div class="recommendModeArea">

      <div  v-for="(item,index) in list" :key="index">
        <!--推荐模式一-->
        <div v-if="item.show_type == 1">
          <router-link :to="{path:'/collageDetails',params:{bookID:item.book_id}}">
            <dl class="mode modeOne">
              <dt>
                <img :src="item.cover" alt="">
              </dt>
              <dd>
                <span>《</span>
                <span>{{item.list[0].book_name}}</span>
                <span>》</span>
                <span>:</span>
                <span>{{item.list[0].group_describe}}</span>
              </dd>
              <dd>
                <span class="price">￥</span>
                <span class="price">{{item.list[0].one_price}}</span>
                <span class="total">
              <span>已抢</span><span v-if="item.list[0].total/10000<1">{{item.list[0].total}}</span><span v-else>{{Math.ceil(list.list[0].total)}}万</span><span>本</span>
            </span>
              </dd>
              <dd>去拼单 ></dd>
            </dl>
          </router-link>
        </div>

        <!--推荐模式二-->
        <div class="mode modeTwo" v-if="item.show_type == 2">
          <img :src="item.cover" alt="">
        </div>

        <!--推荐模式三-->
        <div class="mode modeThree" v-if="item.show_type == 4">
          <img :src="item.cover" alt="">
        </div>

        <!--推荐模式四-->
        <div class="mode modeFour" v-if="item.show_type == 3">
          <h4>{{item.title}}</h4>
          <div class="wrap">

            <dl class="fl" v-for="(value,index) in item.list" :key="index">
              <dt><img :src="value.book_cover" alt=""></dt>
              <dd class="title">{{value.group_describe}}</dd>
              <dd class="price"><span>￥</span><span>{{value.group_price}}</span> <span class="truePrice"><span>￥</span><span>{{value.true_price}}</span></span></dd>
            </dl>


          </div>
        </div>

      </div>

    </div>

    <div v-show="onOff" class="notice">
      {{message}}
    </div>
  </div>

</template>

<script>
  import Banner from './Banner.vue'
  export default {
    name:'Home',
    components:{Banner},
    data:function () {
      return {
        bannerImg:[],
        list:{},
        url:'api/recommendList/',
        page:1,
        message:'',
        onOff:false
      }
    },
    methods:{
      getBanner:function () {
        var that = this;
        this.axios({
          method: 'get',
          url:'api/banner/type/3'
        }).then(function (response) {
          that.bannerImg = response.data.data;
        })
      },
      getMode:function () {
        var that = this;
        this.axios({
          method: 'get',
          url: that.url + that.page
        }).then(function (response) {
          that.list = response.data.data.list;
          console.log(response)
        })
      }
    },
    created:function () {
      var that = this;
      this.getBanner();
      this.getMode();
      this.scroll(
        function () {
          that.page++;
          that.axios({
            method:'get',
            url:that.url+ that.page
          }).then(function (response) {
            if(response.data.code == 200){
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
    width: 100%;
  }
  .funcArea{
    width:100%;
    height:0.98rem;
    border-bottom: 0.08rem solid #f3f2f3;
  }
  .funcArea .part{
    width:25%;
    height:0.98rem;
    text-align: center;
  }
  .funcArea .part dt{
    margin-top: 0.16rem;
    width:100%;
    height:0.45rem;
    position: relative;
  }
  .funcArea .part dd{
    font:0.14rem/0.34rem "";
  }
  .funcArea .part img{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto auto;
    width:0.42rem;
    height:0.38rem;
  }
  .funcArea .part .sign{
    width:0.5rem;
    height:0.4rem;
  }

  .recommendModeArea .mode{
    border-bottom: 0.08rem solid #f3f2f3;
    width:100%;
  }
  .modeOne{
    position: relative;
  }
  .modeOne dt{
    width:100%;
    height:1.88rem;
    border-bottom: 0.01rem solid #f3f2f3;
  }
  .modeOne dt img{
    width:100%;
    height:1.88rem;
  }
  .modeOne dd:nth-of-type(1){
    font:0.16rem/0.42rem "";
    padding:0 0.1rem 0 0.18rem;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;

  }
  .modeOne dd:nth-of-type(2){
    text-indent:0.1rem;
  }
  .modeOne dd:nth-of-type(2) .price{
    color: #df2f25;
    font:0.18rem/0.5rem "";
  }
  .modeOne dd:nth-of-type(2) .total{
    color: #a9a9a9;
    font:0.13rem/0.5rem "";
    margin-left: 0.14rem;
  }
  .modeOne dd:nth-of-type(3){
    position: absolute;
    right:0.1rem;
    bottom: 0.1rem;
    width:1.1rem;
    height:0.38rem;
    background: #df2f25;
    color: #fff;
    border-radius:0.04rem;
    text-align: center;
    font:0.16rem/0.38rem "";
  }
  .modeTwo{
    height:1.98rem;
  }
  .modeTwo img{
    width:100%;
    height:1.98rem;
  }
  .modeThree{
    height:1.02rem;
  }
  .modeThree img{
    width:100%;
    height:1.02rem;
  }
  .modeFour{
    padding:0.05rem 0 0 0.08rem;
  }
  .modeFour h4{
    line-height:0.45rem;
  }
  .modeFour .wrap{
    height:2.4rem;
    width:100%;
  }
  .modeFour dl{
    width:1.2rem;
    margin-right:0.1rem;
    text-align: center;
  }
  .modeFour dl:nth-last-child(1){
    margin-right:0;
  }
  .modeFour dt{
    width:1.2rem;
    height:1.68rem;
  }
  .modeFour dt img{
    width:1.2rem;
    height:1.68rem;
  }
  .modeFour .title{
    width:1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font:0.14rem/0.38rem "";
    padding:0 0.1rem;
  }
  .modeFour .price{
    color: #df2f25;
    font:0.14rem/0.16rem "";
  }
  .price .truePrice{
    color: #a9a9a9;
    text-decoration: line-through;
  }
  .notice{
    width:100%;
    font:0.16rem/0.3rem "";
    text-align: center;
  }
</style>
