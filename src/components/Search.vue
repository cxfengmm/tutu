<template>
  <div class="wrap">
    <div class="backBar">
      <span class="back fl" @click="back"></span>
    </div>

    <div class="searchBar">
      <div class="search">
        <input type="text" placeholder="搜索书名，书号，作者名">
      </div>
    </div>

    <div class="classifyArea">
      <div class="choice">
        <div class="fl">
          <router-link to="/search/male">男性</router-link>
        </div>

        <div class="fl">
          <router-link to="/search/female">女性</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Search',
    data:function () {
      return {

      }
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .wrap{
    width:100%;
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
  .searchBar{
    width:100%;
    height:48px;
    padding:9px;
    background: #f5f5f5;
  }
  .search{
    width:100%;
    height:32px;
    border:1px solid #e4e4e4;
    border-radius:5px;
    text-align: center;
    padding-top: 8px;
  }
  .choice{
    width:100%;
    height:40px;
    border-bottom:1px solid #f5f5f5;
  }
  .choice div{
    width:50%;
  }
  .choice div:nth-child(1){
    padding-right:28px;
    text-align: right;
  }
  .choice div:nth-child(2){
    padding-left:28px;
    text-align: left;
  }
  .choice a{
    display: inline-block;
    vertical-align: top;
    width:55px;
    text-align: center;
    line-height:38px;
  }
  .choice a.router-link-exact-active{
    border-bottom:2px solid #62c83e;
  }
</style>
