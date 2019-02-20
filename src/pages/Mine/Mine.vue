<template>
  <div class="Mine">
    <div class="mineHeader">个人中心</div>
    <div class="mine_commons order">
      <h2>我的订单</h2>
      <ul>
        <router-link  tag="li" :to="{path: '/buy'}"> <img  src="../../../static/images/ic_tab_group_active.png" >购买订单 </router-link>
        <router-link tag="li" :to="{path: '/sale'}"> <img  src="../../../static/images/ic_tab_group_active.png" >卖出订单</router-link>
        <router-link tag="li" :to="{path: '/recycle'}"> <img  src="../../../static/images/ic_tab_group_active.png" > 回收订单</router-link>
        <router-link tag="li" :to="{path: '/account'}"><img   src="../../../static/images/ic_tab_group_active.png" > 我的账户</router-link>
      </ul>
    </div>
    <div class="mine_commons">
      <h2>商品管理</h2>
      <ul>
        <router-link  tag="li" :to="{path: '/buy'}"> <img  src="../../../static/images/ic_tab_audio_active.png" > 我的发布 </router-link>
        <router-link tag="li" :to="{path: '/sale'}"> <img  src="../../../static/images/ic_tab_audio_active.png" > 我的关注</router-link>
        <router-link tag="li" :to="{path: '/recycle'}">  <img  src="../../../static/images/ic_tab_audio_active.png" >我的红包</router-link>
        <router-link tag="li" :to="{path: '/account'}"> <img  src="../../../static/images/ic_tab_audio_active.png" > 我的足迹</router-link>
      </ul>
    </div>
    <div class="mine_commons">
      <h2>我的认证</h2>
      <ul>
        <router-link  tag="li" :to="{path: '/buy'}"><img  src="../../../static/images/ic_tab_home_active.png" > 微信绑定 </router-link>
        <router-link tag="li" :to="{path: '/sale'}"><img  src="../../../static/images/ic_tab_home_active.png" > 专区报名</router-link>
      </ul>
    </div>
    <div class="mine_commons">
      <h2>积分商城</h2>
      <ul>
        <router-link  tag="li" :to="{path: '/buy'}">  <img  src="../../../static/images/ic_tab_group_active.png" > 我的任务 </router-link>
        <router-link tag="li" :to="{path: '/sale'}">  <img  src="../../../static/images/ic_tab_group_active.png" > 每日签到</router-link>
        <router-link tag="li" :to="{path: '/recycle'}">  <img  src="../../../static/images/ic_tab_group_active.png" >  积分商城</router-link>
        <router-link tag="li" :to="{path: '/account'}"> <img  src="../../../static/images/ic_tab_group_active.png" >  好友邀请</router-link>
      </ul>
    </div>
    <div class="mine_commons">
      <h2>客服中心</h2>
      <ul>
        <router-link  tag="li" :to="{path: '/buy'}"> <img  src="../../../static/images/ic_tab_broadcast_active.png" > 联系客服 </router-link>
        <router-link tag="li" :to="{path: '/sale'}"><img  src="../../../static/images/ic_tab_broadcast_active.png" >  叫快递</router-link>
        <router-link tag="li" :to="{path: '/recycle'}"> <img  src="../../../static/images/ic_tab_broadcast_active.png" > 帮助中心</router-link>
      </ul>
    </div>
    <Footer></Footer>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../../components/Footer'
  export default {
    name: "Mine",
    components:{ Footer }
  }
</script>

<style lang="scss" scoped>
  .Mine{
    font-weight: 600;
    width:100%;
    height:6rem;
    overflow-y:scroll;
    padding-bottom: 0.35rem;
    background:#f0ecec;
    .mineHeader{
      text-align: center;
      line-height: 1.5rem;
      background: gold;
      width:100%;
      height:1.5rem;
    }
    .mine_commons{
      background:#fff;
      width: 3.5rem;
      height:1rem;
      margin-left:0.12rem;
      font-weight: 600;
      img{
        width: 0.2rem;
        height: 0.2rem;
        margin-top:-0.23rem;
        margin-left:0.09rem;
      }
      h2{
        width:3.5rem;
        height:0.3rem;
        border-bottom: 0.01rem solid rgba(204, 204, 204, 0.829);
        font-size:0.14rem;
        color:rgba(58, 40, 40, 0.932);
        font-weight: 600;
        margin: 0.08rem;
        line-height: 0.3rem;
      }
      ul li{
        float:left;
        display: block;
        font-size: 0.11rem;
        color:#666;
        margin-left: 0.3rem;
        margin-top:0.3rem;
        line-height: 0.3rem;
      }
    }
    .order{
      margin-top:-0.2rem;
    }
  }
</style>
