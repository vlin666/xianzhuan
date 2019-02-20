<template>
    <div class="stairs">
      <div class="leftBox">
        <div class="left">
          <div v-for="item, index in stairsData"
               @click="changeRight(index)"
               :class="{ isOn: index === isOn }">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="rightBox">
        <div class="right">
          <div class="rightList" v-for="item in rightArr">

            <div class="imgBox" v-if="isHas"><img src="../../static/images/apple.png" alt=""></div>
            <div class="rightName">{{ item.name }}</div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Stairs",
        props: ['stairsData', 'isHas'],
        data(){
          return{
            isOn:0,
            rightArr: [],
            indexN: 0
          }
        },

        mounted(){
          this.getLeftHeight();
          // this.getRightHeight();
          // this.rightArr = this.stairsData[0].sub;
          new BScroll('.leftBox', {scrollX: false, scrollY: true, click: true});
          new BScroll('.rightBox', {scrollX: false, scrollY: true, click: true});
        },

        updated(){
          // this.getRightHeight();
          this.getLeftHeight();
          this.rightArr = this.stairsData[this.indexN].sub;
          // new BScroll('.leftBox', {scrollX: false, scrollY: true, click: true});
        },

        methods: {
          changeRight(index){
            this.isOn = index;
            this.indexN = index;
            this.rightArr = this.stairsData[index].sub;
            //console.log(index);
            //console.log(this.rightArr);
          },
          getLeftHeight(){
            let l = this.stairsData.length;
            let h = ( l * 0.45 ) + 'rem';
            $('.left').css('height', h);
            // console.log(this.stairsData);
          },
          getRightHeight(){
            // let l = $('.right').children.length;
            console.log($('.right').css('height'));
          },

        }
    }
</script>

<style lang="scss" scoped>
  .stairs{
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 0.16rem;
  }
  .leftBox{
    width: 1.2rem;
    position: relative;
    .left{
      width: 1.2rem;
      position: absolute;
      div{
        width: 1.2rem;
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.14rem;
        text-align: center;
        background-color: #F6F7F8;
        border-bottom: 1px solid #eeeeee;
      }
      .isOn{
        width: 1.19rem;
        color: #FFE742;
        background-color: #fff;
        border-left: 1px solid #FFE742;
      }
    }
  }
  .rightBox{
    flex: 1;
    width: calc( 100vw -1.2rem );
    position: relative;
    right: 0;
    padding-top: 0.2rem;
    .right{
      width: calc( 100vw -1.2rem );
      position: absolute;
      display: flex;
      flex-flow: wrap;
      justify-content: space-around;
      min-height: 100%;
      .rightList{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 0.8rem;
        height: 0.8rem;
        margin-bottom: 0.2rem;
        .rightName{
          color: #000000;
          font-size: 0.12rem;
        }
        .imgBox{
          width: 0.5rem;
          height: 0.5rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

</style>
