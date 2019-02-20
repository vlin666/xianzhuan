<template>
    <div class="numNote" ref="numNote" @scroll="getMore">
      <Home_content :content="content"></Home_content>
      <div class="more">{{ word }}</div>
    </div>
</template>

<script>
    import Home_content from "../../../components/Home_content";
    export default {
        name: "NumNote",
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
            this.$http.get('/xz/index.php?tp=api/newbuy_list2&uid=0&t=1547022431&p=1&imei=863254010156924&xm=yyb&pt=1&appid=0&ver=2.0.1&sign=459337d6dd92ef47299bf70156fee443', { retry: 5, retryDelay: 1000 })
              .then(function(res) {
                data = res.data.data;
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
            let { scrollTop, clientHeight, scrollHeight } = this.$refs.numNote;
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
  .numNote{
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
