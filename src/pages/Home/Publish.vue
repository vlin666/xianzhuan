<template>
      <Home_content :content="publish"></Home_content>
</template>

<script>
    import Home_content from "../../components/Home_content";
    import Slide from "../../components/Slide";
    export default {
        name: "Publish",
        components:{Home_content,Slide },
        data(){
          return {
            publish:[]
          }
        },
        mounted(){
          this.$http.get('/static/json/home_publish.json').then((res)=>{
            this.publish = res.data;
          })
        }
    }
</script>

<style scoped>

</style>
