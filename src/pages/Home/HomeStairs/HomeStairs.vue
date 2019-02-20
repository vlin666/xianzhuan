<template>
    <div class="homeStairs">
      <header>
        <div class="fa fa-bars" @click="go"></div>
        <div>热门分类</div>
      </header>
      <Stairs :stairs-data="stairsData" :is-has="isHas" ></Stairs>
    </div>
</template>

<script>
    import Stairs from "../../../components/Stairs";
    export default {
        name: "HomeStairs",
      components: {Stairs},
      data(){
          return{
            leftIcon: 'fa fa-bars',
            stairsData: [],
            isHas: 1
          }
        },
      mounted(){
        this.getInit();
      },
      methods: {
        getInit(){
          let self = this;
          let data;
          this.$http.get('/static/json/homeStairs.json', { retry: 5, retryDelay: 1000 })
            .then(function(res) {
              data = res.data;
              self.stairsData = data;
              return;

            })
            .catch(function(err) {
              console.log('failed', err);
            });
        },
        go(){
          history.go(-1);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .homeStairs{
    width: 100%;
    height: 100%;
    padding-top: 0.5rem;
  }
  header{
    font-size: 0.16rem;
    height: 0.5rem;
    width: 100%;
    display: flex;
    background-color: #FFE742;
    color: #724202;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    div:nth-child(1){
      width: 0.5rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
    }
    div:nth-child(2){
      flex:1;
      line-height: 0.5rem;
      text-align: center;
      text-indent: -0.5rem;
    }
  }
</style>
