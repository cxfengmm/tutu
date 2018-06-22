import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/Container.vue'
import Home from '../components/Home.vue'
import Select from '../components/Select.vue'
import Male from '../components/Male.vue'
import Female from '../components/Female.vue'
import Short from '../components/Short.vue'
import ClassifyPage from '../components/ClassifyPage.vue'
import CollageDetails from '../components/CollageDetails.vue'
import SignIn from '../components/SignIn.vue'
import Search from '../components/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      redirect:'/home',
      component: Container,
      children:[
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'select',
          name: 'Select',
          component: Select
        },
        {
          path: 'male',
          name: 'Male',
          component: Male
        },
        {
          path: 'female',
          name: 'Female',
          component: Female
        },
        {
          path: 'short',
          name: 'Short',
          component: Short
        },
      ]
    },
    {
      path: '/classifyPage',
      name: 'ClassifyPage',
      component: ClassifyPage
    },
    {
      path: '/collageDetails',
      name: 'CollageDetails',
      component: CollageDetails
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      children:[
        {
          path:'male'
        },
        {
          path:'female'
        }
      ]
    }
  ]
})
