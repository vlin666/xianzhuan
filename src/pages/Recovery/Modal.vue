<template>
  <div class="modal">
    <div class="modalBox">
      <div class="modalTop">
        提示
        <p class="x fa fa-close" @click="close"></p>
      </div>
      <div class="modalMiddle">
        是否清除已选参数？
      </div>
      <div class="modalBottom">
        <div class="sure" @click="sure(1)">确定</div>
        <div class="nosure" @click="nosure(0)">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Modal",
        props: ['isShow'],
      data(){
          return{
            isClear: 1,
          }
      },
        methods: {
          close(){
            this.$emit('update:isShow', 0);
            this.$emit('')
          },
          sure(val){
            this.$emit('mClear', val);
            this.$emit('update:isShow', 0)
          },
          nosure(){
            // this.$emit('mClear', val);
            this.$emit('update:isShow', 0)
          }
        }
    }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 20;
    display: flex;
    align-content: center;
    justify-content: center;
    .modalBox {
      align-self: center;
      width: 2.5rem;
      height: 2rem;
      background-color: #fff;
      overflow: hidden;
      border-radius: 0.1rem;
      .modalTop {
        width: 100%;
        height: 0.7rem;
        background-color: #F7F7F9;
        text-align: center;
        line-height: 0.7rem;
        font-size: 0.18rem;
        position: relative;
        p {
          width: 0.3rem;
          height: 0.3rem;
          position: absolute;
          top: 0.1rem;
          right: 0.1rem
        }
      }
      .modalMiddle {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
      }
      .modalBottom {
        margin-top: 0.1rem;
        width: 100%;
        height: 0.7rem;
        display: flex;
        justify-content: space-around;
        div {
          padding: 0.2rem 0rem;
          color: #f1f1f1;
          width: 0.5rem;
          height: 0.1rem;
          text-align: center;
          line-height: 0.1rem;
          border-radius: 0.1rem;
        }
        .sure {
          background-color: #FF8420;
        }
        .nosure {
          background-color: #A0A0A0;
        }
      }
    }
  }
</style>
