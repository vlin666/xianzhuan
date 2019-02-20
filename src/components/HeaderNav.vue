<template>
    <div class="headerNav">
      <p :class="left" @click="goNext"></p>
      <div class="notInput" @click="goSearch" v-if="!isInput" :style="{background: bgColor}">
        <i class="fa fa-search"></i>
        请输入你要搜索的手机/平板
        <span>搜索</span>
      </div>
      <div v-if="isInput" class="isInput">
        <input type="text" placeholder="请输入你要搜索的手机/平板">
        <span>搜索</span>
        <p class="clear" @click="clear"><i>X</i></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        data(){
          return{
            isInput: 0,
          }
        },
        props: {
          left: {
            type: String,
            default: 'fa fa-angle-left'
          },
          bgColor:{
            type: String,
            default: '#ECECEC'
          },
          goNext: {
            type: Function,
            default: function(){
              history.go(-1);
            }
          },
        },
        methods: {
          goSearch(){
            // this.isInput = 1;
            // this.$router.push('/search')
          },
          clear(){
            $('input').val('');
          }
        }
    }
</script>

<style lang="scss" scoped>
  .headerNav{
    font-size: 0.14rem;
    display: flex;
    height: 0.5rem;
    width: 100%;
    align-items: center;
    p{
      width: 0.5rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: 0.3rem;
      color: #673300;
    }
    .notInput{
      color: #B3B3B3;
      flex:1;
      height: 0.3rem;
      line-height: 0.3rem;
      border-radius: 0.2rem;
      margin-right: 0.3rem;
      text-indent: 0.05rem;
    }
    .isInput{
      flex:1;
      position: relative;
      .clear{
        position: absolute;
        font-size: 0.12rem;
        color: #f1f1f1;
        background-color: #BBBBBB;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        top: 0.06rem;
        left: 2.4rem;
        line-height: 0.2rem;
      }
      input{
        width: 75%;
        text-indent: 0.05rem;
        height: 0.3rem;
        border: none;
        outline: none;
        line-height: 0.3rem;
        border-radius: 0.2rem;
        background-color: #eeeeee;
        padding: 0 0.1rem;
      }
      span{
        text-align: center;
        line-height: 0.3rem;
        margin-left: 0.1rem;
      }
    }
  }
</style>
