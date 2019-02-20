import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/Home'
import Publish from '@/pages/Home/Publish'
import Nearby from '@/pages/Home/Nearby'

import HomeStairs from '@/pages/Home/HomeStairs/HomeStairs'

import Numeral from '@/pages/Home/numeral/Numeral'
import NumAll from '@/pages/Home/numeral/NumAll'
import NumCom from '@/pages/Home/numeral/NumCom'
import NumMov from '@/pages/Home/numeral/NumMov'
import NumNote from '@/pages/Home/numeral/NumNote'
import NumTel from '@/pages/Home/numeral/NumTel'

import BestItem from '@/pages/Home/BestItem/BestItem'
import Android from '@/pages/Home/BestItem/Android'
import Ios from '@/pages/Home/BestItem/Ios'



import Appraisal from '@/pages/Home/Appraisal/Appraisal'
import PhoneStairs from '@/pages/Home/HomeStairs/PhoneStairs'
import Integral from '@/pages/Home/Integral/Integral'
import Chindogu from '@/pages/Home/Integral/Chindogu'
import Turntable from '@/pages/Home/Integral/Turntable'
import MyProp from '@/pages/Home/Integral/MyProp'



import Recoverydetail from '@/pages/Recovery/Recoverydetail'
import Recovery from '@/pages/Recovery/Recovery'
import Personal from '@/pages/Recovery/Personal'
import Offcial from '@/pages/Recovery/Offcial'

import Message from '@/pages/Message/Message'
import Info from '@/pages/Message/Info'

import Mine from '@/pages/Mine/Mine'
import Order from '@/pages/Mine/Order'
import Account from '@/pages/Mine/Order/Account'
import Recycle from '@/pages/Mine/Order/Recycle'
import Sale from '@/pages/Mine/Order/Sale'
import Buy from '@/pages/Mine/Order/Buy'

import Login from '@/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {path:'/', redirect:'/publish'},
        {path:'/publish', component: Publish},
        {path:'/nearby', component: Nearby}
      ]
    },
    {
      path: '/numeral',
      component: Numeral,
      children: [
        {path: '/', redirect: '/numall'},
        {path: '/numall', component: NumAll},
        {path: '/numtel', component: NumTel},
        {path: '/numcom', component: NumCom},
        {path: '/numnote', component: NumNote},
        {path: '/nummov', component: NumMov},
      ]
    },
    {
      path: '/bestItem',
      name:'bestItem',
      component: BestItem,
      children:[
        {path: '/', redirect: '/ios'},
        {path: '/ios',name:'ios', component: Ios},
        {path: '/android',name:'android', component: Android},
      ]
    },
    {
      path: '/appraisal',
      name:'appraisal',
      component: Appraisal
    },
    {
      path: '/phoneStairs',
      component: PhoneStairs
    },
    {
      path: '/integral',
      name:'integral',
      component: Integral,
      children: [
        {path: '/', redirect: '/chindogu'},
        {path: '/chindogu',name:'chindogu', component: Chindogu},
        {path: '/turntable',name:'turntable', component: Turntable},
        {path: '/myProp',name:'myProp', component: MyProp},
      ]
    },
    {
      path: '/homeStairs',
      component: HomeStairs
    },
    {
      path: '/recovery',
      name: 'Recovery',
      component: Recovery,
      children:[
        {path:'/', redirect:'/offcial'},
        {path:'/offcial', component:Offcial},
        {path:'/personal', component:Personal}
      ]
    },
    {
      path: '/recoverydetail',
      component: Recoverydetail
    },
    {
      path:'/login',
      component:Login
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path:'/info',
      name:'Info',
      component:Info,
      children:[
        {path:'/buy', component:Buy},
        {path:'/sale', component:Sale},
        {path:'/account', component:Account},
        {path:'/recycle', component:Recycle}
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    },
    {
      path:'order',
      name:'Order',
      component:Order,
      children:[
        {path:'/buy', component:Buy},
        {path:'/sale', component:Sale},
        {path:'/account', component:Account},
        {path:'/recycle', component:Recycle}
      ]
    }
  ]
})
