<template>
    <div class="ios"
         v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <div
        v-for="good in goods"
        :key="good.id"
        class="goods"
    >
        <img class="goods-pic" :src="good.icon" alt="" float>
        <p class="Name">{{good.name}}</p>
        <p class="yprice">{{good.yprice}}</p>
    </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            goods:[],
            //  count:6,
            // start:0,
            // loading:false,//让无限滚动触发
            // hasGood:true,//关闭的属性
        }
    },
    methods:{
        getGoods(){
            //  let toast = Toast({
            //     message: '正在加载中...',
            //     duration: -1,
            //     iconClass: 'fa fa-cog fa-spin'
            // });
            this.$http.get("/static/json/ios.json",{
                 params:{
                    count:this.count,
                    start:this.start
                }
            }).then(res=>{
                //console.log(res);
                this.goods =this.goods.concat(res.data.list);
                // this.$nextTick(()=>{
                //     this.loading = false;
                //     toast.close();
                //     let total = 30;
                //     if (total - this.start <=0) {
                //         this.hasGood = false;
                //         return false;
                //     }
                // });
                this.start+=this.start;
            })
        },
        loadMore(){
            // if (!this.hasGood) {
            //     Toast({
            //         message: '数据加载完毕！',
            //         position:"bottom",
            //         duration: 1000
            //     });
            //     return false;
            // }
            this.loading = true;
            // this.getGoods();
        }
    },
    created(){
        this.getGoods()
    }
}
</script>
<style lang="scss" scoped>
   .goods{
       float: left;
        width: 1.8rem;
        height: 1.8rem;
        background: #ffffff;
        display: flex;
        flex: 1;
        justify-content: space-between;
        margin: 0.03rem;
        position: relative;
        .goods-pic{
        margin-top: 0;
        width: 1.8rem;
        height: 1.5rem;
        }
        .Name{
            position: absolute;
            bottom: 0.2rem;
            font-size: 0.11rem;
            color: #5a5858;
        }
        .yprice{
            position: absolute;
            bottom: 0.03rem;
            left: 0.1rem;
            font-size: 0.11rem;
            color: #d80808;
        }
   }
</style>
