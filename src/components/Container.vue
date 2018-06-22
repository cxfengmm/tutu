<template>
  <div class="wrap">
    <section class="top">
      <header>
        <h1>图图阅读</h1>
        <!--<div class="shareBtn">
          <span></span>
          <span></span>
          <span></span>
        </div>-->
      </header>

      <nav class="navBar">
        <router-link to="/home">首页</router-link>
        <router-link to="/select">精选</router-link>
        <router-link to="/female">女性</router-link>
        <router-link to="/male">男性</router-link>
        <router-link to="/short">短篇</router-link>
      </nav>
    </section>

    <section class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>

    <footer class="bottom">
      <router-link to="/home">
        <div class="part fl">
          <dl>
            <dt><span class="index"></span></dt>
            <dd>首页</dd>
          </dl>
        </div>
      </router-link>
      <router-link to="/search">
        <div class="part fl">
          <dl>
            <dt><span class="search"></span></dt>
            <dd>搜索</dd>
          </dl>
        </div>
      </router-link>
      <router-link to="/shelf">
        <div class="part fl">
          <dl>
            <dt><span class="shelf"></span></dt>
            <dd>书架</dd>
          </dl>
        </div>
      </router-link>
      <router-link to="/mine">
        <div class="part fl">
          <dl>
            <dt><span class="mine"></span></dt>
            <dd>我的</dd>
          </dl>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script>
    export default {
      name:'Container',
      data:function () {
        return {

        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .wrap{
    width:100%;
  }
  .top{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:0.94rem;
    z-index:9;
    background: #fff;
  }

  header{
    width:100%;
    height:0.48rem;
    background: #000;
    text-align: center;
    font:0.18rem/0.48rem "";
    color: #fff;
    border-bottom:0.01rem solid #454545;
    position: relative;
  }
  .shareBtn{
    width:0.92rem;
    height:0.32rem;
    border-radius:0.22rem;
    border:1px solid #262626;
    position: absolute;
    right:0.07rem;
    top:0.07rem;
  }
  .navBar{
    width:100%;
    height:0.46rem;
    background: #fff;
    font:0.18rem/0.46rem "";
  }
  .navBar a{
    float: left;
    width:20%;
    text-align: center;
    color: #333333;
  }
  .navBar .router-link-active{
    border-bottom:0.02rem solid red;
  }

  .content{
    padding:0.95rem 0 0.55rem 0;
    overflow-y: auto;
  }

  .bottom{
    position: fixed;
    left:0;
    bottom:0;
    width:100%;
    height:0.55rem;
    border-top:0.01rem solid #e2e3e7;
    z-index: 9;
    background: #fff;
  }
  .bottom a{
    float: left;
    width:25%;
    height:0.54rem;
  }
  .part{
    width:100%;
    height:0.54rem;
    text-align: center;
  }
  .part dt{
    width:100%;
    height:0.16rem;
    position: relative;
    margin-top: 0.08rem;
  }
  .part dd{
    font:0.14rem/0.28rem "";
  }
  .part span{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto auto;
    width:0.22rem;
    height:0.22rem;
  }
  .part .index{
    background: url("../assets/img/tab/tab-index.png") no-repeat;
    background-size: 100% 100%;
  }
  .part .search{
    background: url("../assets/img/tab/tab-search.png") no-repeat;
    background-size: 100% 100%;
  }
  .part .shelf{
    background: url("../assets/img/tab/tab-book.png") no-repeat;
    background-size: 100% 100%;
  }
  .part .mine{
    background: url("../assets/img/tab/tab-my.png") no-repeat;
    background-size: 100% 100%;
  }
  .bottom .router-link-active{
    color: #df2f25;
  }
  .bottom .router-link-active .index{
    background: url("../assets/img/tab/tab-index-act.png") no-repeat;
    background-size: 100% 100%;
  }
  .bottom .router-link-active .search{
    background: url("../assets/img/tab/tab-search-act.png") no-repeat;
    background-size: 100% 100%;
  }
  .bottom .router-link-active .shelf{
    background: url("../assets/img/tab/tab-book-act.png") no-repeat;
    background-size: 100% 100%;
  }
  .bottom .router-link-active .mine{
    background: url("../assets/img/tab/tab-my-act.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
