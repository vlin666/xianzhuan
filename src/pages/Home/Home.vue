<template>
  <div class="home">
    <HeaderNav class="header" :left="left" :goNext="goNext"></HeaderNav>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in banners" :key="banners.id">
            <img :src="item.picture" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="nav">
      <div class="nav_item" v-for="item,index in navArr" @click="nav(index)">
        <img :src="item.picture" alt="">
        <p>{{item.title}}</p>
      </div>
    </div>
    <div class="entrance">
      <img :src="entrance" alt="">
    </div>
    <div class="recommend">
      <div class="recommend_item" v-for="item in recommend" @click="goStairs">
        <img :src="item.picture" alt="">
        <div class="recommend_item_right">
          <p class="recommend_title">{{item.title}}</p>
          <p class="recommend_content">{{item.content}}</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content_head">
        <div class="content_head_link">
          <p @click="go('/publish',0)" :class="{isChecked:isChecked === 0}">新鲜发布</p>
        </div>
        <div class="content_head_link">
          <p @click="go('/nearby',1)" :class="{isChecked:isChecked === 1}">附近的</p>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../../components/Footer'
  import HeaderNav from "../../components/HeaderNav";
  export default {
    name: 'Home',
    components:{HeaderNav, Footer },
    data() {
      return {
        left: 'fa fa-bars',
        banners:[],
        navArr:[],
        entrance:'',
        recommend:[],
        isChecked:0,
        path: '/bestItem',
      }
    },
    methods:{
      go(path,index){
        this.$router.push(path);
        this.isChecked = index;
      },
      goNext(){
        this.$router.push('/homeStairs')
      },
      goStairs(){
        this.$router.push('/phoneStairs')
      },
      nav(index){
        switch (index) {
          case 0:
            this.path = '/bestItem';
            break;
          case 1:
            this.path = '/appraisal';
            break;
          case 2:
            this.path = '/phoneStairs';
            break;
          case 3:
            this.path = '/integral';
            break;
          default:
            this.path = '/bestItem'
        }
        console.log(this.path);
        this.$router.push(this.path);
      }
    },
    mounted() {
      this.$http.get('/static/json/home_top.json').then((res)=>{
        //console.log(res.data.bigeye);
        this.banners = res.data.bigeye;
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            autoplay:true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
        this.navArr = res.data.recommend.slice(0,4);
        this.entrance = res.data.entranceList.picture;
        this.recommend = res.data.recommend.slice(4);
      })
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .swiper-container{
    height:1.45rem;
    img{
      width:100%;
      height:1.45rem;
    }
    .swiper-pagination{
      text-align:right;
      bottom:0;
    }
  }
  .nav{
    width:100%;
    height:0.8rem;
    display:flex;
    background: #fff;
    margin-bottom:0.05rem;
    .nav_item{
      flex:1;
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      img{
        width:0.35rem;
        height:0.4rem;
        padding-bottom:0.05rem;
      }
      p{
        color:#000;
        font-size:0.13rem;
      }
    }
  }
  .entrance{
    width:100%;
    padding:0.03rem;
    background: #fff;
    img{
      width:100%;
      border-radius: 0.05rem;
    }
  }
  .recommend{
    width:100%;
    height:1.5rem;
    background-color: #fff;
    margin-bottom:0.06rem;
    .recommend_item:nth-child(2){
      background-color: #fdeeb7;
    }
    .recommend_item:nth-child(3){
      background-color: #fec6c6;
    }
    .recommend_item:nth-child(4){
      background-color: #e3f0b1;
    }
    .recommend_item{
      width:calc(50% - 0.07rem);
      height:0.7rem;
      float:left;
      border-radius:0.05rem;
      background-color: #c4e4ff;
      margin-left:0.05rem;
      margin-bottom:0.05rem;
      img{
        display:block;
        float:left;
        width:0.5rem;
        height:0.5rem;
        margin:0.1rem 0 0 0.2rem;
      }
      .recommend_item_right{
        float:right;
        margin:0.15rem 0.1rem 0 0;
        .recommend_title{
          color:#000;
          text-align:right;
          width:0.72rem;
          height:0.2rem;
        }
        .recommend_content{
          font-size:11px;
          line-height:0.2rem;
        }
      }
    }
  }
  .content{
    width:100%;
    background-color: #fff;
    .content_head{
      margin:0 0.2rem 0.02rem 0.2rem;
      height:0.4rem;
      .content_head_link{
        margin-left:0.7rem;
        float:left;
        text-align:center;
        font-weight: 900;
        p{
          width:60px;
          line-height:0.37rem;
          border-bottom:0.03rem solid #fff;
        }
      }
    }
  }
  .isChecked{
    border-bottom:0.03rem solid #ffe742 !important;
  }
</style>
