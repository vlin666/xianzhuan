<template>
    <div class="info">
      <div class="info_header">
        <div @click="goBack" class="back"><</div>
        <div class="info_right">header</div>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Info",
        methods:{
          goBack(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style lang="scss" scoped>
  .info_header{
    width:100%;
    height:0.5rem;
    background-color: gold;
    .back{
      line-height:0.5rem;
      float:left;
      width:0.5rem;
      text-align:center;
    }
    .info_right{
      width:calc(100% - 0.5rem);
      text-align:center;
      line-height:0.5rem;
    }
  }
</style>
