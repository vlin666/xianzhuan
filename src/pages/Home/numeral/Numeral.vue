<template>
    <div class="numeral">
      <div class="topBox">
        <header>
          <span @click="goBack" class="fa fa-angle-left"></span>
          <span>3C数码</span>
        </header>
        <div class="infeed">
          <div class="infeedList">
          <span v-for="item, index in infeedArr"
                :class="{isOn: index === isOn}"
                @click="goPage(index, item.path)">{{ item.title }}</span>
          </div>
        </div>
      </div>

      <router-view></router-view>

    </div>
</template>

<script>
  import BScroll from 'better-scroll';
    export default {
        name: "Numeral",
        data(){
          return{
            isOn: 0,
            infeedArr: [
              {title: '全部', path: '/numall'},
              {title: '品牌手机', path: '/numtel'},
              {title: '平板电脑', path: '/numcom'},
              {title: '笔记本电脑', path: '/numnote'},
              {title: '数码影音', path: '/nummov'},
              {title: '电脑', path: '/numtel'},
              {title: '数码相机', path: '/numcom'},
              {title: '智能设备', path: '/numnote'},
              {title: '3C配件', path: '/nummov'},
            ]
          }
        },
        methods: {
          goBack(){
            history.go(-1);
          },
          goPage(index, path){
            this.isOn = index;
            this.$router.push(path);
          }

        },
      mounted(){
          new BScroll('.infeed', {scrollX: true, scrollY: false, click: true});
      }
    }
</script>

<style lang="scss" scoped>
  .numeral{
    width: 100%;
    height: calc( 100vh - 1.31rem );
    font-size: 0.16rem;
    padding: 0.81rem 0 0.5rem;
  }
  .topBox{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  header{
    background-color: #FFE742;
    height: 0.5rem;
    width: 100%;
    display: flex;
    font-size: 0.3rem;
    span{
      text-align: center;
      line-height: 0.5rem;
      width:0.5rem;
    }
    span:nth-child(2){
      flex:1;
      font-size: 0.18rem;
      text-indent: -0.5rem;

    }
  }
  .infeed{
    background-color: #fff;
    height: 0.3rem;
    width: calc( 100vw );
    margin-bottom: 0.01rem;
    .infeedList{
      width: 6.4rem;
      display: flex;
      height: 0.2rem;
      /*flex-wrap: no-wrap;*/
      span{
        height: 0.28rem;
        font-size: 0.14rem;
        padding: 0 0.1rem;
        line-height: 0.29rem;
        color: #949494;
      }
      .isOn{
        color: #623C1A;
        border-bottom: 2px solid #FFE742;
      }
    }
  }
</style>
