import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  //定义状态
  state:{
    classfyID:1,
    categoryName:''
  },
  mutations:{
    upData:function (state,obj) {
      state.categoryName = obj.categoryName;
      state.classfyID = obj.classfyID;
    }
  }
})

export default store
