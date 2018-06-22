<template>
  <div class="wrap">
    <div class="backBar">
      <span class="back fl" @click="back"></span>
      <span>签到领红包</span>
    </div>

    <div>
      <p>领签到红包</p>
      <p>分享群好友可额外领红包</p>
      <button>签到领红包</button>
    </div>
  </div>
</template>

<script>
    export default {
      name:'SignIn',
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
</style>
