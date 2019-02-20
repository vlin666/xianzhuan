<template>
  <div class="recovery">
    <div class="nav">
      <div class="navList" >
        <p v-for="item, index in navArr" @click="go(index,item.path)"
           :class="{isOn: index === isOn}"
        >{{ item.title }}</p>
      </div>
      <div class="cart"><img :src="src" alt=""></div>
    </div>
    <router-view></router-view>
    <Footer></Footer>
    <!--<div class="recovery_swiper">-->
      <!--<div class="swiper-container">-->
        <!--<div class="swiper-wrapper">-->
          <!--<div class="swiper-slide"><Offcial/></div>-->
          <!--<div class="swiper-slide"><Personal/></div>-->
        <!--</div>-->

      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Footer from '../../components/Footer'
export default {

  name: 'Recovery',
  components:{ Footer },
  data(){
    return {
      src: '../../static/images/cart.png',
      isOn: 0,
      mySwiper: '',
      navArr: [
        {title: '官方回收', path:'/offcial',src: '../../static/images/cart.png'},
        {title: '个人回收', path:'/personal',src: '../../static/images/search.png'},
      ]
    }
  },
  beforeRouteEnter(to, from, next){
    next(vm=>{
      if(to.path === '/personal'){
        vm.isOn = 1;
        vm.src = vm.navArr[1].src;
      }
    });
    next();
  },
  mounted(){
    // this.mySwiper = new Swiper('.swiper-container')
  },
  methods: {
    go(index,path){
      this.$router.push(path);
      this.isOn = index;
      this.src = this.navArr[index].src;
    }
    // switchSwiper(index){
    //   this.isOn = index;
    //   this.src = this.navArr[index].src;
    //   this.mySwiper.slideTo(index, 300, false);
    // },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recovery{
    width:calc( 100vw );
    height: 100%;
    padding-top: 0.5rem;
  }
  .recovery .nav{
    width:calc( 100vw );
    height:0.5rem;
    background-color: #FFE742;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
    font-size: 0.16rem;
  }
  .recovery .nav .navList{
    display: flex;
  }
  .recovery .nav .isOn{
    background-color: #5C3411;
    color: #FFE742
  }
  .recovery .nav .navList p{
    display: block;
    padding:0.05rem 0.2rem ;
    margin:0;
    border: 1px solid #5C3411;
  }
  .recovery .nav .cart{
    position: absolute;
    top:0.17rem;
    right:0.2rem;
  }
  .recovery .nav .cart img{
    width: 0.2rem;
    height:0.2rem;
  }
  /*.swiper-container{*/
    /*width: 100%;*/
  /*}*/
</style>
