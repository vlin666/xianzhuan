<template>
    <div class="integral">
       <div class="head">
           <p class="Tit">积分商城</p>
            <span class="get-back" @click="goBack">＜</span>
       </div>

        <div class="item-nav">
            <mt-tabbar>
                <mt-tab-item
                    v-for="nav in navs"
                    :key="nav.id"
                >
                    <router-link :to="nav.name">

                        {{nav.title}}
                    </router-link>
                </mt-tab-item>
            </mt-tabbar>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navs:[
                {id:1,title:"道具兑换",name:"chindogu"},
                {id:2,title:"转盘抽奖",name:"turntable"},
                {id:3,title:"我的道具",name:"myProp"},
            ]
        }
    },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="scss">
    .integral{
        background: #ffffff;
        .head{
        height: 0.4rem;
        background: gold;
        position: relative;
        text-align: center;
            .get-back{
                font-size:0.28rem;
                position: absolute;
                left: 0;
                top: 0;
            }
            .Tit{
                line-height: 0.4rem;
            }
        }
        .item-nav{
        width: 3rem;
        position: absolute;
        top: 0.55rem;
        left: 0.37rem;
        border-radius: 50%;
        }
    }
</style>
