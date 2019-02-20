<template>
  <div class="nearby">
    <Home_content :content="nearby"></Home_content>
  </div>
</template>

<script>
  import Home_content from '../../components/Home_content'
  export default {
    name: "Nearby",
    components:{Home_content },
    data(){
      return {
        nearby:[]
      }
    },
    mounted(){
      this.$http.get('/static/json/home_nearby.json').then((res)=>{
        this.nearby = res.data;
      })
    }
  }
</script>

<style scoped>

</style>
