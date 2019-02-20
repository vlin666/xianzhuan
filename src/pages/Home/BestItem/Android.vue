<template>
<div class="android">
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
export default {
    data(){
        return{
            goods:[]
        }
    },
    methods:{
        getGoods(){
            this.$http.get("/static/json/android.json").then(res=>{
                console.log(res);
                this.goods =res.data.list
            })
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
