<template>
  <div class="foot">
    <div v-for="item,index in footNav"
         :class="{foot_item:true,selected:isShow === index}"
         @click="go(item.path,index)">
      <img :src="item.icon" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer",
        data(){
          return {
            isShow:0,
            footNav:[
              {
                title:'闲出售',
                icon:'../../../static/images/2.jpg',
                path:'/home'
              },
              {
                title:'闲回收',
                icon:'../../../static/images/0.jpg',
                path:'/recovery'
              },
              {
                title:'发布',
                icon:'../../../static/images/pub.jpg',
                path:'/release'
              },
              {
                title:'消息',
                icon:'../../../static/images/1.jpg',
                path:'/login'
              },
              {
                title:'我的',
                icon:'../../../static/images/9.jpg',
                path:'/login'
              }
            ]
          }
        },
        methods:{
          go(path,index){
            this.isShow = index;
            this.$router.push({path:path,query:{index:index}});
          }
        }
    }
</script>

<style lang="scss" scoped>
  .foot .foot_item:nth-child(3) img{
    width:0.55rem;
    height:0.55rem;
    position:absolute;
    bottom:0.25rem;
  }
  .foot .foot_item:nth-child(3) p{
    margin-top:0.25rem;
  }
  .foot{
    width:100%;
    height:0.55rem;
    position:fixed;
    bottom:0;
    background-color: #fff;
    border-top:2px solid #f0f0f0;
    display:flex;
    justify-content: space-around;
    .foot_item{
      flex:1;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width:0.2rem;
        height:0.25rem;
      }
      p{
        height:0.1rem;
        font-size:0.1rem;
        color:#b6bcc6
      }
    }
  }
  .selected p{
    color:#7a5a3d !important;
  }
</style>
