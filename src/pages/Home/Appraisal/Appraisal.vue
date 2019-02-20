<template>
    <div class="appraisal">
       <HeaderNav></HeaderNav>
        <div>
            <img src="https://imgxz.3z.cc/xz/upload/bigeye/201801/201801180311502722.png" alt="">
        </div>
       <Home_content :content="goods"></Home_content>
        <back-top v-back-top size="small"></back-top>
    </div>
</template>
<script>
import HeaderNav from "../../../components/HeaderNav"
import Home_content from "../../../components/Home_content"
import BackTop from "../../../components/BackTop"

export default {
    components:{
        HeaderNav,Home_content,BackTop
    },
    data(){
        return{
            goods:[]
        }
    },
    methods:{
        getGoods(){
            this.$http.get("/static/json/appraisal.json").then(res=>{
                this.goods = res.data.appraisal;
            })
        }
    },
    created(){
        this.getGoods();
    }

}
</script>
<style lang="scss" scoped>
    .appraisal{
        background: #ffffff;
         img{
            width: 3.75rem;
            height:1.5rem;
        }
    }

</style>


