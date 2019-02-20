<template>
    <div class="order">
      <div class="order_header">
        <button @click="goBack">goback</button>
        header
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Order",
        methods:{
          goBack(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style lang="scss" scoped>
  .order_header{
    width:100%;
    height:0.5rem;
    background-color: gold;
  }
</style>
