<template>
    <div class="numAll" ref="numAll" @scroll="getMore">
      <div class="topImg">
        <img src="http://img.sccnn.com/bimg/339/15202.jpg" alt="">
      </div>
      <Home_content :content="content"></Home_content>
      <div class="more">{{ word }}</div>
    </div>
</template>

<script>
    import Home_content from "../../../components/Home_content";
    export default {
        name: "NumAll",
        components: {Home_content},
        data(){
          return {
            flag: 0,
            content: [],
            word: '加载更多'
          }
        },
        mounted(){
          this.getInit();
        },
        methods: {
          getInit(){
            let self = this;
            let data;
            this.$http.get('/static/json/home_nearby.json', { retry: 5, retryDelay: 1000 })
              .then(function(res) {
                data = res.data;
                self.content = self.content.concat(data);
                self.flag = 0;
                self.word = '加载更多';
                return;
              })
              .catch(function(err) {
                console.log('failed', err);
              });

          },
          getMore(){
            let { scrollTop, clientHeight, scrollHeight } = this.$refs.numAll;
            let self = this;
            if((scrollTop + clientHeight + 20)  >= scrollHeight){
              if(self.flag) return;
              self.flag = 1;
              self.word = '正在加载中';
              self.getInit();
            }

          }
        }
    }
</script>

<style lang="scss" scoped>
  .numAll{
    width: calc( 100vw );
    height: calc( 100vh - 81px );
    overflow: auto;
  }
  .topImg{
    width: calc( 100vw );
    img{
      display: block;
      width: calc( 100vw );
      height: 100%;
    }
  }
  .more{
    line-height: 0.44rem;
    font-size: 0.2rem;
    text-align: center;
    padding-bottom: 0.5rem;
  }
</style>
