<template>
  <div class="message">
    <div class="message_header">消息</div>
    <div class="middle">
      <router-link  tag="div" :to="{path: '/buy'}"> <img src="../../../static/images/ic_tab_broadcast_active.png" > 私信 <br><span >暂无新的私信消息</span></router-link>
      <router-link tag="div" :to="{path: '/sale'}">  <img src="../../../static/images/ic_tab_broadcast_active.png" > 留言消息<br><span >暂无新的留言消息</span></router-link>
      <router-link tag="div" :to="{path: '/recycle'}">  <img src="../../../static/images/ic_tab_broadcast_active.png" > 订单消息<br><span >暂无新的订单消息</span></router-link>
      <router-link tag="div" :to="{path: '/account'}"> <img src="../../../static/images/ic_tab_broadcast_active.png" > 系统消息<br><span >暂无新的系统消息</span></router-link>
      <router-link tag="p" :to="{path: '/buy'}" class="sunshine"><img src="../../../static/images/ic_tab_broadcast_active.png" >  晒单消息<br><span >暂无新的晒单消息</span></router-link>
    </div>
    <div class="middle2">
      <span class="hoto">热门话题</span>
      <router-link tag="span" :to="{path: '/home'}" class="more">查看更多</router-link>
      <section>
        <router-link  tag="div" :to="{path: '/buy'}">官方鉴定，购机无忧</router-link>
        <router-link  tag="div" :to="{path: '/sale'}">购买的商品有质量问题，假货怎么办？</router-link>
        <router-link  tag="div" :to="{path: '/account'}">开学——老司机教你防骗指南</router-link>
        <router-link  tag="div" :to="{path: '/recycle'}">骗子套路曝光第三波~</router-link>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../../components/Footer'
  export default {
    name:'message',
    components:{ Footer },
  }
</script>


<style lang="scss" scoped>
  .message_header{
    background-color: gold;
    line-height:0.4rem;
    padding-top:0.1rem;
    text-align:center;
  }
  .middle{
    float: left;
    width:100%;
    height:2.9rem;
    background:#f0ecec;
    font-size:0.14rem;
    span{
      font-size:0.01rem;
      color:#ccc;
      display: block;
      float: left;
    }
    img{
      width:0.4rem;
      height:0.4rem;
      float: left;
      margin-right: 0.12rem;
      margin-left:0.12rem;
      margin-bottom: 0.12rem;
    }
    div{
      height:0.5rem;
      padding-top:0.08rem;
      margin:0.02rem 0px;
      background:rgb(255, 255, 255);
    }
    .sunshine{
      padding-top:0.08rem;
      margin-top:0.15rem;
      height:0.5rem;
      background:rgb(255, 255, 255);

    }
  }
  .middle2{
    width:100%;
    flex:1;
    background: rgb(255, 255, 255);
    section{
      margin-top:0.02rem;
      border-top:0.01rem solid #ccc;
    }
    .hoto{
      font-size:0.18rem;
      color:black;
      margin:0.1rem;
      text-align: center;
      line-height: 0.4rem;
    }
    .more{
      display: block;
      float: right;
      font-size:0.02rem;
      color:black;
      margin:0.12rem;
    }
    div{
      width:3.3rem;
      height:0.3rem;
      background:#f0ecec;
      margin:0.08rem 0 0.1rem 0.2rem;
      font-size: 0.12rem;
      color: black;
      text-align: center;
      line-height: 0.3rem;
    }
  }
</style>
