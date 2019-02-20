<template>
  <div class="recoverydetail">
    <div class="header">
      <div class="headerTop">
        <span class="fa fa-angle-left" @click="go"></span>
        <span>即时估价</span>
        <span class="fa fa-question-circle-o"></span>
      </div>
      <div class="headerBottom">
        <div>
          <p>
            <img src="https://imgxz.3z.cc/ersx/cellphone_img/1510997656_esx_25827_46.jpg" alt="">
          </p>
          <p>
            <span>iPhone X</span>
            <i>平均回收价</i>
            <span>￥4409</span>
          </p>

        </div>
        <div>
          <p>
            <i>回收量</i>
            <span>879单</span>
          </p>
        </div>
        <p>
          {{ checkNum }}/11
        </p>
      </div>
    </div>

    <Selecter class="selecter" :checkNum.sync="checkNum"></Selecter>
  </div>
</template>

<script>
import Selecter from "./Selecter";
export default {
  name: 'Recoverydetail',
  components: {Selecter},
  data(){
    return{
      checkNum: 0
    }
  },
  methods:{
    go(){
      history.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >

  .recoverydetail{
    width: 100%;
    padding: 1.5rem 0 0.7rem;
    height: calc( 100vh - 220px );
    font-size: 0.16rem;
    overflow: hidden;
    .header{
      width: 100%;
      height: 1.50rem;
      position: fixed;
      top:0;
      left:0;
      bottom:0;
      border-bottom: 1px solid #E5E5E5;
      z-index: 2;
      .headerTop{
        width: 100%;
        height:50px;
        display: flex;
        background-color: gold;
        align-items: center;
        span{
          width: 0.5rem;
          height:0.5rem;
          line-height: 0.5rem;
          text-align: center;
          font-size: 0.2rem;
        }
        span:nth-child(2){
          flex:1;
        }
      }

      .headerBottom{
        width: 100%;
        height: 1rem;
        display: flex;
        background-color: #fff;
        p{
          display: flex;
          align-items: center;
          color: #F7B73B;
        }
        div{
          font-size: 0.12rem;
          width: 1.5rem;
          /*height: 1rem;*/
          display: flex;
          align-items: center;
          justify-content: center;

          p{
            display: flex;
            flex-flow: column;
            color: #444;
            i{
              color: #AEAEAE;
            }
          }

          img{
            width: calc( 15vw );
            height:calc( 10vh )
          }
        }


      }


    }
    .selecter{
      /*margin-top: 1.5rem;*/
    }
  }

</style>
