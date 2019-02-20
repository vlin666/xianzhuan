<template>
    <div class="bestitem">
        <HeaderNav></HeaderNav>
        <div
            v-for="bigeye in bigeyes"
            :key="bigeye.id"
        >

            <img style="width:100%" :src="bigeye.picture" alt="">
        </div>
        <div>
            <h3>每日特惠</h3>
        </div>
        <div class="bagsale">
             <div class="sale">
                <div class="sale-bagbox">
                    <div
                        class="sale-samllbox"
                        v-for="discounts in discount"
                        :key="discounts.id"
                    >
                        <p class="isnew">{{discounts.isnew}}</p>
                        <img :src="discounts.icon" alt="">
                        <p class="Name">{{discounts.name}}</p>
                        <span class="zhprice">{{discounts.zhprice}}</span>
                    </div>
                </div>
            </div>
        </div>

        <mt-tabbar class="nav">
            <mt-tab-item
                v-for="nav in navs"
                :key="nav.id"
                class="nav_item"
            >
                <router-link :to="{name:nav.name}">
                    <i :class="['fa','fa-'+nav.icon]"/>
                    {{nav.title}}
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
        <router-view></router-view>
        <back-top v-back-top size="small"></back-top>
    </div>
</template>
<script>
import HeaderNav from "../../../components/HeaderNav"
import BetterScroll from 'better-scroll';
import BackTop from "../../../components/BackTop"
export default {
    components:{
        HeaderNav,BackTop
    },
    data(){
       return{

            bigeyes:[],
            discount:[],
            navs:[
                {id:1,title:"苹果手机",name:"ios"},
                {id:2,title:"安卓手机",name:"android"}
            ]
       }
    },
    methods:{
        getarticle(){
            this.$http.get("/static/json/bestitem.json").then((res)=>{
               this.bigeyes = res.data.bigeye;
               this.discount = res.data.discounts;
            })
        }
    },
    mounted(){

    },
    updated(){
        new BetterScroll(".sale",{scrollX:true,scrollY:false});
    },
    created(){
       this.getarticle();
    }
}
</script>
<style lang="scss">
    .bestitem{
        // height:0.6rem;
        // background: gold;
        // float: left;
        img{
            height:1.5rem;
        }
        h3{
            margin-top: 0.15rem;
            margin-left: 0.3rem;
        }
        .bagsale{
            overflow: hidden;
            .sale{
            position: relative;
            height: 1.6rem;
                .sale-bagbox{
                    width: 10.4rem;
                    height: 1.6rem;
                    position: absolute;
                    display: flex;
                    align-items: center;

                    .sale-samllbox{
                        width: 1.3rem;
                        height: 1.7rem;
                        background: #ffffff;
                        border:0.01rem solid #ccc;
                        float: left;
                        img{
                            width: 1.1rem;
                            height: 1rem;
                            margin-top:0.06rem;
                        }
                        .isnew{
                            width: 0.5rem;
                            height: 0.2rem;
                            background: green;
                            color: #ffffff;
                        }
                        .Name{
                            font-size: 0.1rem;
                            color: black;
                        }
                        .zhprice{
                            color: red;
                        }
                    }
                }
            }
        }
        .nav{
          display:flex;
          line-height:0.5rem;
          .nav_item{
            flex:1;
            text-align:center;
          }
        }
    }
</style>
